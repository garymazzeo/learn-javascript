/* global TimelineMax Back */
const main = document.querySelector('main')
const modal = document.querySelector('.modal')
const modalButton = document.querySelector('.jsModalButton')
const modalCloseButton = document.querySelector('.jsModalClose')
const modalOverlay = document.querySelector('.modal-overlay')
const wavingHand = document.querySelector('.wave-hand')

/**
 * Wave hand animation
 */
const wave = _ => {
  const tl = new TimelineMax({})
  // Sets transform origin
  tl.set(wavingHand, { transformOrigin: 'bottom center' })
  tl.from(wavingHand, 0.5, { scale: 0.25, opacity: 0, ease: Back.easeOut.config(1.5) })
  tl.to(wavingHand, 0.2, { rotation: 15 })
  tl.to(wavingHand, 0.2, { rotation: -15 })
  tl.to(wavingHand, 0.2, { rotation: 15 })
  tl.to(wavingHand, 0.2, { rotation: -15 })
  tl.to(wavingHand, 0.2, { rotation: 0 })
}

/**
 * Checks if modal is open
 */
const isModalOpen = _ => {
  return document.body.classList.contains('modal-is-open')
}

/**
 * Opens Modal
 */
const openModal = _ => {
  document.body.classList.add('modal-is-open')
  wave()

  // Focus on input
  const input = modal.querySelector('input')
  input.focus()

  // Trap focus
  document.addEventListener('keydown', trapFocus)

  // Sets modalButton to expanded
  modalButton.setAttribute('aria-expanded', true)
  main.setAttribute('aria-hidden', 'true')
}

/**
 * Closes Modal
 */
const closeModal = _ => {
  document.body.classList.remove('modal-is-open')
  document.removeEventListener('keydown', trapFocus)
  modalButton.setAttribute('aria-expanded', false)
  main.removeAttribute('aria-hidden')
  modalButton.focus()
}

const trapFocus = event => {
  const focusables = modal.querySelectorAll('input, button')
  const firstFocusable = focusables[0]
  const lastFocusable = focusables[focusables.length - 1]

  // Directs to first focusable
  if (document.activeElement === lastFocusable && event.key === 'Tab' && !event.shiftKey) {
    event.preventDefault()
    firstFocusable.focus()
  }

  // Directs to last focusable
  if (document.activeElement === firstFocusable && event.key === 'Tab' && event.shiftKey) {
    event.preventDefault()
    lastFocusable.focus()
  }
}

modalButton.addEventListener('click', event => {
  openModal()
})

modalCloseButton.addEventListener('click', event => {
  closeModal()
})

modalOverlay.addEventListener('click', event => {
  if (!event.target.closest('.modal')) {
    closeModal()
  }
})

document.addEventListener('keydown', event => {
  if (isModalOpen() && event.key === 'Escape') {
    closeModal()
  }
})
