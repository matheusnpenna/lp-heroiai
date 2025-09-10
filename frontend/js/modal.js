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
      console.log("[DEBUG] GET URL", url)
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