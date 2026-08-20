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

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', labelSearchDialog);
} else {
  labelSearchDialog();
}
