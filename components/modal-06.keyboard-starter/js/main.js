/* global TimelineMax Back */
const modalButton = document.querySelector('.jsModalButton')
const modalCloseButton = document.querySelector('.jsModalClose')
const modalOverlay = document.querySelector('.modal-overlay')
const wavingHand = document.querySelector('.wave-hand')

const wave = hand => {
  const tl = new TimelineMax({})
  // Sets transform origin
  tl.set(hand, { transformOrigin: 'bottom center' })
  tl.from(hand, 0.5, { scale: 0.25, opacity: 0, ease: Back.easeOut.config(1.5) })
  tl.to(hand, 0.2, { rotation: 15 })
  tl.to(hand, 0.2, { rotation: -15 })
  tl.to(hand, 0.2, { rotation: 15 })
  tl.to(hand, 0.2, { rotation: -15 })
  tl.to(hand, 0.2, { rotation: 0 })
}

modalButton.addEventListener('click', event => {
  document.body.classList.add('modal-is-open')
  wave(wavingHand)
})

modalCloseButton.addEventListener('click', event => {
  document.body.classList.remove('modal-is-open')
})

modalOverlay.addEventListener('click', event => {
  if (!event.target.closest('.modal')) {
    document.body.classList.remove('modal-is-open')
  }
})
