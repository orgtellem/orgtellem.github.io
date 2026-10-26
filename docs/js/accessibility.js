function labelSearchDialog() {
  const searchDialog = document.querySelector('.md-search[role="dialog"]');
  if (searchDialog && !searchDialog.hasAttribute('aria-label')) {
    const searchInput = searchDialog.querySelector('input');
    const label = searchInput?.getAttribute('aria-label')
      || searchInput?.getAttribute('placeholder')
      || 'Search';
    searchDialog.setAttribute('aria-label', label);
  }
}

function revealTabTarget() {
  // History updates can precede CSS :target during instant navigation.
  let target;
  try {
    target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
  } catch {
    return;
  }
  const panel = target?.closest('.tabbed-block');
  if (!panel) return;
  const index = Array.from(panel.parentElement.children).indexOf(panel);
  const input = panel.closest('.tabbed-set').querySelectorAll(':scope > input')[index];
  if (!input.checked) {
    input.click();
    requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
  }
}

function updateLanguageLinks() {
  // RU lives at / and EN at /en/; language changes reload the translated shell.
  document.querySelectorAll('.tellem-language-link').forEach((link) => {
    const target = new URL(location.href);
    target.pathname = target.pathname.replace(/^\/en(?=\/|$)/, '') || '/';
    if (link.getAttribute('hreflang') === 'en') target.pathname = `/en${target.pathname}`;
    link.href = target.href;
    link.target = '_self';
    link.onclick = updateLanguageLinks;
  });
}

document.addEventListener('click', (event) => {
  const link = event.target.closest?.('a');
  if (link?.getAttribute?.('data-md-component') === 'search-share') {
    link.setAttribute('data-clipboard-text', link.href);
    link.target = '_self';
    return;
  }
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  if (!link || link.target || link.origin !== location.origin) return;
  if (link.pathname.startsWith('/en/') !== location.pathname.startsWith('/en/')) link.target = '_self';
}, true);

location$.subscribe(() => {
  requestAnimationFrame(revealTabTarget);
  updateLanguageLinks();
});

document$.subscribe(() => {
  labelSearchDialog();
  requestAnimationFrame(revealTabTarget);
  updateLanguageLinks();
  // GLightbox omits href while privacy rewrites images; instant navigation must restore it too.
  document.querySelectorAll('a.glightbox').forEach((link) => {
    const image = link.querySelector('img');
    link.href = image.dataset.src || image.src;
  });
});

// The plugin creates its GLightbox instance after Material's extra scripts.
window.addEventListener('load', () => {
  if (typeof lightbox === 'undefined') return;
  let imageTrigger;
  lightbox.on('open', () => {
    imageTrigger = document.activeElement;
    const russian = document.documentElement.lang === 'ru';
    const dialog = document.querySelector('#glightbox-body');
    dialog.setAttribute('aria-label', russian ? 'Увеличенное изображение' : 'Enlarged image');
    const labels = [
      ['.gclose', russian ? 'Закрыть' : 'Close'],
      ['.gprev', russian ? 'Предыдущее изображение' : 'Previous image'],
      ['.gnext', russian ? 'Следующее изображение' : 'Next image'],
    ];
    labels.forEach(([selector, label]) => dialog.querySelector(selector).setAttribute('aria-label', label));
    dialog.querySelector('.gclose').focus();
  });
  lightbox.on('close', () => {
    if (imageTrigger?.isConnected) imageTrigger.focus();
  });
});
