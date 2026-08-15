/* Zatsepina EAE Portfolio — minimal site behaviour.
   Adds a hairline border to the sticky header once the user scrolls past the hero. */

(function () {
  'use strict';

  var header = document.getElementById('site-header');
  if (!header) return;

  var ticking = false;

  function update() {
    var scrolled = window.scrollY > 8;
    header.classList.toggle('is-scrolled', scrolled);
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }

  update();
  window.addEventListener('scroll', onScroll, { passive: true });
})();
