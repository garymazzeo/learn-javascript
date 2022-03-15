// listen for the open click
// make the modal visible
// listen for the close click
// make the modal not hidden

const openButton = document.querySelector('.jsModalButton')
const closeButton = document.querySelector('.jsModalClose')
const modal = document.querySelector('.jsModalOverlay')

function toggleModal() {
  modal.classList.toggle('open')
}

openButton.addEventListener('click', e => {
  toggleModal(),
  wave()
})

closeButton.addEventListener('click', toggleModal)

modal.addEventListener('click', e => {
  if (!e.target.closest('.modal')) {
    toggleModal()
  }
})

// GSAP 
const wavingHand = document.querySelector('.wave-hand')

const wave =_ => {
  const tl = gsap.timeline()
  tl.from(wavingHand, 0.5, {
    scale: 0.25,
    opacity: 0,
    ease: Back.easeOut.config(1.5)
  })
  .set(wavingHand, { transformOrigin: 'bottom center' })
  .to(wavingHand, 0.2, { rotation: 15 })
  .to(wavingHand, 0.2, { rotation: -15 })
  .to(wavingHand, 0.2, { rotation: 15 })
  .to(wavingHand, 0.2, { rotation: -15 })
  .to(wavingHand, 0.2, { rotation: 0 })
}
