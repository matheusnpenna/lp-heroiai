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
