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