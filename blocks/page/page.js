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
      let element = elements[i];
      if(element.classList.contains(themeModifierName)) {
        element.classList.remove(themeModifierName);
      }
      else {
        element.classList.add(themeModifierName);
      }
    }
  }
}
