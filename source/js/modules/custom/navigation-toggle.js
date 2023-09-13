const addNavigationToggle = () => {
  const header = document.querySelector('.header');
  const toggle = header.querySelector('[data-navigation-toggle]');
  const navigation = header.querySelector('.header__nav');

  const closeNavigation = () => {
    document.removeEventListener('keydown', onDocumentKeydown);
    document.removeEventListener('click', onDocumentClick);
    navigation.classList.remove('is-open');
    toggle.classList.remove('is-open');
    window.scrollLock.enableScrolling();
    header.dataset.navigation = 'is-closed';
  };

  const openNavigation = () => {
    document.addEventListener('keydown', onDocumentKeydown);
    document.addEventListener('click', onDocumentClick);
    navigation.classList.add('is-open');
    toggle.classList.add('is-open');
    window.scrollLock.disableScrolling();
    header.dataset.navigation = 'is-open';
  };

  const onDocumentKeydown = (evt) => {
    return evt.key === 'Escape' ? closeNavigation() : null;
  };

  const onDocumentClick = (evt) => {
    return (evt.target.closest('.header__nav') || evt.target.closest('.header__nav-toggle') ? evt.preventDefault() : closeNavigation());
  };

  if (header !== null && toggle !== null && navigation !== null) {
    toggle.addEventListener('click', () => {
      return toggle.classList.contains('is-open') ? closeNavigation() : openNavigation();
    });
  }

};

export {addNavigationToggle};
