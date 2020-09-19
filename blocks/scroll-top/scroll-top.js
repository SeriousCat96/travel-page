let scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', trackScroll);

function trackScroll() {
  var scrolled     = window.pageYOffset;
  var clientHeight = document.documentElement.clientHeight;

  if (scrolled > clientHeight) {
    scrollTopBtn.classList.add('scroll-top_visible');
  }
  else {
    scrollTopBtn.classList.remove('scroll-top_visible');
  }
}

function scrollToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -25);
    setTimeout(scrollToTop, 0);
  }
}

function SetScrollTheme() {
  setSelectorTheme("scroll-top");
}
