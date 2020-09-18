var topBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', trackScroll);

function trackScroll() {
  var scrolled = window.pageYOffset;
  var coords   = document.documentElement.clientHeight;

  if (scrolled > coords) {
    topBtn.classList.add('scroll-top_visible');
  }
  else {
    topBtn.classList.remove('scroll-top_visible');
  }
}

function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -25);
    setTimeout(backToTop, 0);
  }
}
