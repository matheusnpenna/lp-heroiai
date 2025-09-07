const FAQs = document.querySelectorAll('.accordion-item');

if (FAQs && FAQs.length) {
  FAQs.forEach((_, idx) => {
    const i = idx + 1

    document.getElementById(`accordion-heading-${i}`).addEventListener('click', function() {
      const aBody = document.getElementById(`accordion-body-${i}`)
      const aHeading = document.getElementById(`accordion-heading-${i}`)
  
      const isCollapsed = aBody.classList.contains('hidden') && aHeading.classList.contains('collapsed')
  
      if (isCollapsed) {
        aBody.classList.remove('hidden')
        aHeading.classList.remove('collapsed')
      } else {
        aBody.classList.add('hidden');
        aHeading.classList.add('collapsed')
      }
  
      FAQs.forEach((_, index) => { 
        const indexToHidden = index + 1;
        if (indexToHidden != i) {
          document.getElementById(`accordion-body-${indexToHidden}`)
          .classList.add('hidden')
          document.getElementById(`accordion-heading-${indexToHidden}`)
          .classList.add('collapsed')
        }
      })
    })
  })
}

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
const yearEl = document.querySelector('.footer__divider-info__year')

if (yearEl) {
  yearEl.innerText = new Date().getFullYear();
}
