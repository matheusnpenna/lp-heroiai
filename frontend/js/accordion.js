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
