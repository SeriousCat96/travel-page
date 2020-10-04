const changeThemeBtn = document.querySelector('.header__link.header__link_type_button');

changeThemeBtn.addEventListener('click', changeTheme);

/* Change theme for page */
function changeTheme() {
  setPageTheme();
  setHeaderTheme();
  setPhotoGridTheme();
  SetScrollTheme();
}

/* Sets theme to page block */
function setPageTheme() {
  setSelectorTheme("page");
}

/* Sets theme to the selector collecton. */
function setSelectorTheme(selectorName) {
  var elements          = document.getElementsByClassName(selectorName);
  var themeModifierName = selectorName + "_theme_dark";

  if(elements != null) {
    for(let i = 0; i < elements.length; ++i) {
      elements[i].classList.toggle(themeModifierName);
    }
  }
}
