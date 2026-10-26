import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';

class Control extends EventTarget {
  checked = false;
  focusCount = 0;
  focus() { this.focusCount += 1; }
  click() { this.dispatchEvent(new Event('click')); }
}

function pageRuntime(script, elements, location = new URL('https://docs.example/'), globals = {}) {
  const subscribers = [];
  const locationSubscribers = [];
  const documentEvents = {};
  vm.runInNewContext(readFileSync(new URL(`../docs/js/${script}`, import.meta.url), 'utf8'), {
    document: {
      querySelector: (selector) => elements[selector],
      querySelectorAll: (selector) => elements[selector] || [],
      getElementById: (id) => elements[`#${id}`],
      addEventListener: (event, callback) => { documentEvents[event] = callback; },
    },
    document$: { subscribe: (callback) => subscribers.push(callback) },
    location$: { subscribe: (callback) => locationSubscribers.push(callback) },
    AbortController,
    Event,
    URL,
    location,
    window: new EventTarget(),
    requestAnimationFrame: (callback) => callback(),
    ...globals,
  });
  const navigate = () => subscribers.forEach((callback) => callback());
  navigate.hashChange = () => locationSubscribers.forEach((callback) => callback());
  navigate.activateLink = (link, options = {}) => documentEvents.click({ target: { closest: () => link }, ...options });
  return navigate;
}

test('home search survives instant navigation and returns focus only to the current home button', () => {
  const firstHome = new Control();
  const secondHome = new Control();
  const toggle = new Control();
  const input = new Control();
  const elements = {
    '.tellem-home-search': firstHome,
    '[data-md-toggle="search"]': toggle,
    '[data-md-component="search-query"]': input,
  };
  const navigate = pageRuntime('home.js', elements);
  navigate();
  firstHome.dispatchEvent(new Event('click'));
  assert.equal(toggle.checked, true);
  assert.equal(input.focusCount, 1);
  toggle.checked = false;
  toggle.dispatchEvent(new Event('change'));
  assert.equal(firstHome.focusCount, 1);

  delete elements['.tellem-home-search'];
  navigate();
  firstHome.dispatchEvent(new Event('click'));
  assert.equal(toggle.checked, false, 'the detached home button must no longer open search');

  elements['.tellem-home-search'] = secondHome;
  navigate();
  navigate();
  secondHome.dispatchEvent(new Event('click'));
  assert.equal(input.focusCount, 2, 'revisiting home must not duplicate handlers');
  toggle.checked = false;
  toggle.dispatchEvent(new Event('change'));
  assert.equal(firstHome.focusCount, 1);
  assert.equal(secondHome.focusCount, 1);
});

test('closing home search restores focus to the current button if the homepage remounts before the next frame', () => {
  const firstHome = new Control();
  const secondHome = new Control();
  const currentHome = new Control();
  const toggle = new Control();
  const input = new Control();
  const frames = [];
  const elements = {
    '.tellem-home-search': firstHome,
    '[data-md-toggle="search"]': toggle,
    '[data-md-component="search-query"]': input,
  };
  const navigate = pageRuntime('home.js', elements, undefined, {
    requestAnimationFrame: (callback) => frames.push(callback),
  });
  navigate();
  firstHome.click();
  frames.shift()();
  toggle.checked = false;
  toggle.dispatchEvent(new Event('change'));
  elements['.tellem-home-search'] = secondHome;
  navigate();
  elements['.tellem-home-search'] = currentHome;
  navigate();
  while (frames.length) frames.shift()();
  assert.equal(firstHome.focusCount, 0);
  assert.equal(secondHome.focusCount, 0);
  assert.equal(currentHome.focusCount, 1);
});

test('search dialogs receive the current language label after navigation', () => {
  const labels = new Map();
  const dialog = {
    hasAttribute: (name) => labels.has(name),
    setAttribute: (name, value) => labels.set(name, value),
    querySelector: () => ({ getAttribute: () => 'Поиск' }),
  };
  const elements = { '.md-search[role="dialog"]': dialog };
  const navigate = pageRuntime('accessibility.js', elements);
  navigate();
  assert.equal(labels.get('aria-label'), 'Поиск');
  navigate();
  assert.equal(labels.get('aria-label'), 'Поиск');

  const englishLabels = new Map();
  elements['.md-search[role="dialog"]'] = {
    hasAttribute: (name) => englishLabels.has(name),
    setAttribute: (name, value) => englishLabels.set(name, value),
    querySelector: () => ({ getAttribute: () => 'Search' }),
  };
  navigate();
  assert.equal(englishLabels.get('aria-label'), 'Search');
});

test('privacy-rewritten images remain keyboard links after instant navigation', () => {
  const image = { dataset: {}, src: 'https://docs.example/media/screenshot.png' };
  const link = { querySelector: () => image };
  const elements = { 'a.glightbox': [link] };
  const navigate = pageRuntime('accessibility.js', elements);
  navigate();
  assert.equal(link.href, image.src);

  const nextImage = { dataset: { src: 'https://docs.example/en/media/screenshot.png' } };
  const nextLink = { querySelector: () => nextImage };
  elements['a.glightbox'] = [nextLink];
  navigate();
  assert.equal(nextLink.href, nextImage.dataset.src);
});

test('sharing search uses the current query URL after edits and instant navigation', () => {
  let copied = 'https://docs.example/?q=';
  const share = { href: 'https://docs.example/?q=delivery', getAttribute: () => 'search-share', setAttribute: (name, value) => { copied = value; } };
  const navigate = pageRuntime('accessibility.js', {});
  navigate();
  navigate.activateLink(share);
  assert.equal(copied, share.href);
  assert.equal(share.target, '_self', 'copying must bypass instant navigation while native preventDefault handles the click');
  share.href = 'https://docs.example/modules/crm/delivery/?q=Ozon';
  navigate();
  navigate.activateLink(share);
  assert.equal(copied, share.href);
});

test('language links preserve deep paths and fragments through RU/EN round trips', () => {
  const russian = { getAttribute: () => 'ru' };
  const english = { getAttribute: () => 'en' };
  const elements = { '.tellem-language-link': [russian, english] };
  const location = new URL('https://docs.example/modules/crm/orders/#cancellation');
  const navigate = pageRuntime('accessibility.js', elements, location);
  navigate();
  assert.equal(english.href, 'https://docs.example/en/modules/crm/orders/#cancellation');
  assert.equal(english.target, '_self', 'changing language must reload translated navigation and labels');
  location.href = 'https://docs.example/modules/crm/orders/#statuses';
  navigate.hashChange();
  assert.equal(english.href, 'https://docs.example/en/modules/crm/orders/#statuses', 'a section change on the same page must update the language destination');
  location.href = english.href;
  navigate();
  assert.equal(russian.href, 'https://docs.example/modules/crm/orders/#statuses');
  location.href = 'https://docs.example/en/?q=delivery';
  navigate();
  assert.equal(russian.href, 'https://docs.example/?q=delivery');
  assert.equal(english.href, 'https://docs.example/en/?q=delivery');
  location.href = 'https://docs.example/modules/crm/orders/#payment';
  english.onclick();
  assert.equal(english.href, 'https://docs.example/en/modules/crm/orders/#payment', 'activation must also use the latest scroll-tracked fragment');
});

test('cross-language search links reload the shell while same-language and new-tab links keep their behavior', () => {
  const navigate = pageRuntime('accessibility.js', {});
  const english = new URL('https://docs.example/en/modules/crm/delivery/?h=ozon#ozon');
  navigate.activateLink(english);
  assert.equal(english.target, '_self');
  const russian = new URL('https://docs.example/modules/crm/delivery/#ozon');
  navigate.activateLink(russian);
  assert.equal(russian.target, undefined);
  const newTab = new URL(english);
  newTab.target = '_blank';
  navigate.activateLink(newTab);
  assert.equal(newTab.target, '_blank');
  const modified = new URL(english);
  navigate.activateLink(modified, { ctrlKey: true });
  assert.equal(modified.target, undefined);
});

test('modern and legacy anchors reveal the matching provider tab after loads and hash changes', () => {
  const inputs = [new Control(), new Control(), new Control(), new Control()];
  inputs.forEach((input) => input.addEventListener('click', () => {
    inputs.forEach((other) => { other.checked = other === input; });
  }));
  inputs[0].checked = true;
  const tabs = { querySelectorAll: () => inputs };
  const panels = inputs.map(() => ({ closest: () => tabs }));
  const parentElement = { children: panels };
  panels.forEach((panel) => { panel.parentElement = parentElement; });
  let scrolled = 0;
  const frames = [];
  const target = (index) => ({ closest: () => panels[index], scrollIntoView: () => { scrolled += 1; } });
  const elements = { ':target': target(0), '#ozon': target(2), '#yandex': target(1), '#_5': target(3) };
  const location = new URL('https://docs.example/modules/crm/delivery/#ozon');
  const navigate = pageRuntime('accessibility.js', elements, location, {
    requestAnimationFrame: (callback) => frames.push(callback),
  });
  const render = () => { while (frames.length) frames.shift()(); };
  navigate();
  inputs[0].click(); // Material restores its remembered tab during native mounting.
  render();
  assert.equal(inputs[2].checked, true, '#ozon on initial load must reveal the Ozon panel');
  location.hash = '#yandex';
  navigate.hashChange();
  render();
  assert.equal(inputs[1].checked, true, '#yandex on the same page must reveal Yandex');
  location.hash = '#_5';
  navigate();
  render();
  assert.equal(inputs[3].checked, true, 'legacy #_5 after instant navigation must reveal Russian Post');
  assert.equal(scrolled, 3);
  location.hash = '#%';
  navigate.hashChange();
  assert.doesNotThrow(render, 'an invalid fragment must not break navigation');
});

test('image dialogs localize controls, focus the close button and restore the image link', () => {
  const browser = new EventTarget();
  const callbacks = {};
  const trigger = new Control();
  trigger.isConnected = true;
  const controls = Object.fromEntries(['.gclose', '.gprev', '.gnext'].map((selector) => {
    const control = new Control();
    control.setAttribute = (name, value) => { control[name] = value; };
    return [selector, control];
  }));
  const dialog = { setAttribute: (name, value) => { dialog[name] = value; }, querySelector: (selector) => controls[selector] };
  const document = {
    addEventListener: () => {},
    activeElement: trigger,
    documentElement: { lang: 'ru' },
    querySelector: () => dialog,
  };
  pageRuntime('accessibility.js', {}, undefined, {
    window: browser,
    document,
    lightbox: { on: (event, callback) => { callbacks[event] = callback; } },
  });
  browser.dispatchEvent(new Event('load'));
  callbacks.open();
  assert.equal(controls['.gclose']['aria-label'], 'Закрыть');
  assert.equal(controls['.gnext']['aria-label'], 'Следующее изображение');
  assert.equal(controls['.gclose'].focusCount, 1);
  callbacks.close();
  assert.equal(trigger.focusCount, 1);
  document.documentElement.lang = 'en';
  callbacks.open();
  assert.equal(controls['.gclose']['aria-label'], 'Close');
  assert.equal(dialog['aria-label'], 'Enlarged image');
});
