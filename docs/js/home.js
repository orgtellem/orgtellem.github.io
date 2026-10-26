let homepageSearchEvents;

document$.subscribe(() => {
  homepageSearchEvents?.abort();
  const homepageSearch = document.querySelector('.tellem-home-search');
  if (!homepageSearch) return;

  homepageSearchEvents = new AbortController();
  const events = { signal: homepageSearchEvents.signal };
  const searchToggle = document.querySelector('[data-md-toggle="search"]');
  const searchInput = document.querySelector('[data-md-component="search-query"]');
  let openedFromHomepage = false;

  homepageSearch.addEventListener('click', () => {
    openedFromHomepage = true;
    searchToggle.checked = true;
    searchToggle.dispatchEvent(new Event('change', { bubbles: true }));
    requestAnimationFrame(() => searchInput.focus());
  }, events);

  searchToggle.addEventListener('change', () => {
    if (!searchToggle.checked && openedFromHomepage) {
      openedFromHomepage = false;
      requestAnimationFrame(() => {
        if (!searchToggle.checked) document.querySelector('.tellem-home-search')?.focus();
      });
    }
  }, events);
});
