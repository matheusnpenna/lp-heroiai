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
const modalOverlay = document.querySelector('[data-modal="modal-overlay"]');
const closeModalButton = document.querySelector('[data-modal="close-modal"]');
const openModalButtons = document.querySelectorAll('[data-modal="open-modal"]');
const iframeId = 'testimony-modal';

function getYoutubeVideoId(url) {
  const regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|live\/|watch\?v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[1].length == 11 ? match[1] : '';
};

if (openModalButtons && openModalButtons.length) {
  openModalButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      modalOverlay.classList.remove("hidden");
      const url = btn.getAttribute('data-href');
      if (url) {
        const iframe = document.createElement('iframe');
        iframe.id = iframeId;
        iframe.src = 'https://www.youtube.com/embed/'+getYoutubeVideoId(url);
        iframe.frameborder="0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowfullscreen = true
        iframe.width = '100%';
        iframe.height = '450px';
        const modalContent = document.querySelector('[data-modal="modal-content"]');
        modalContent.insertAdjacentElement('beforeend', iframe);
      }
    });
  })
}

function closeModal() {
  modalOverlay.classList.add("hidden");
  const iframe = document.querySelector('#'+iframeId)
  if (iframe) iframe.remove();
}

closeModalButton.addEventListener("click", () => closeModal());

modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) { closeModal }
});
const yearEl = document.querySelector('.footer__divider-info__year')

if (yearEl) {
  yearEl.innerText = new Date().getFullYear();
}
