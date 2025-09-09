const FAQs = document.querySelectorAll('.accordion-item');

if (FAQs && FAQs.length) {
  FAQs.forEach((el, indexToShow) => {
    el.addEventListener('click', function() {
      const aBody = el.querySelector(`[id^="accordion-body"]`)
      const aHeading = el.querySelector(`[id^="accordion-heading"]`)
  
      const isCollapsed = aBody.classList.contains('hidden') && aHeading.classList.contains('collapsed')
  
      if (isCollapsed) {
        aBody.classList.remove('hidden');
        aHeading.classList.remove('collapsed');
      } else {
        aBody.classList.add('hidden');
        aHeading.classList.add('collapsed');
      }
  
      FAQs.forEach((elToHidden, indexToHidden) => { 
        if (indexToHidden != indexToShow) {
          elToHidden.querySelector(`[id^="accordion-body"]`).classList.add('hidden')
          elToHidden.querySelector(`[id^="accordion-heading"]`).classList.add('collapsed')
        }
      })
    })
  })
}

if (window.innerWidth > 768) {
  const glide = new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    focusAt: 'center',
    perView: 4,
    autoplay: 5000,
    breakpoints: {
      1400: {
        perView: 3
      },
      991: {
        perView: 2
      },
      768: {
        perView: 1
      }
    }
  })
  
  glide.mount()
}
const yearEl = document.querySelector('.footer__divider-info__year')

if (yearEl) {
  yearEl.innerText = new Date().getFullYear();
}
