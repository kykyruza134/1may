// Плавное появление блоков при прокрутке. Без анимации, если в системе включено «уменьшить движение».
(function () {
  var els = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    Array.prototype.forEach.call(els, function (el) { el.classList.add('is-visible'); });
    return;
  }
  document.documentElement.classList.add('motion');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  Array.prototype.forEach.call(els, function (el) { io.observe(el); });
})();
