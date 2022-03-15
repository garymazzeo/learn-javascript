const carousel = document.querySelector('.carousel')
const previousButton = document.querySelector('.previous-button')
const nextButton = document.querySelector('.next-button')
const contents = document.querySelector('.carousel__contents')
const dotsContainer = document.querySelector('.carousel__dots')
const dots = [...carousel.querySelectorAll('.carousel__dot')]
const slides = [...carousel.querySelectorAll('.carousel__slide')]


/**
 * Get the slide position from the left
 * @return {Number} Slide position in px value
 */
const setSlidePositions = _ => {
  const slideWidth = slides[0].getBoundingClientRect().width
  slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`
  })
}

/**
 * Moves current slide out, moves target slide in
 * @param {HTMLElement} currentSlide Current slide showing
 * @param {HTMLElement} targetSlide Slide to move into place
 */
const switchSlide = (currentSlide, targetSlide) => {
  const destination = getComputedStyle(targetSlide).left
  contents.style.transform = `translateX(-${destination})`
  currentSlide.classList.remove('is-selected')
  targetSlide.classList.add('is-selected')
}

/**
 * Switches highlight from current slide representation to the target slide representation
 * @param {HTMLElement} currentDot Current highlighted dot
 * @param {HTMLElement} targetDot Dot to become highlighted
 */
const highlightDot = (currentDot, targetDot) => {
  currentDot.classList.remove('is-selected')
  targetDot.classList.add('is-selected')
}

/**
 * Shows or hides the arrow button for advancing the slides based on slide position
 * @param {HTMLElement} targetSlideIndex Index of the dot that was clicked
 */
const showHideArrowButtons = targetSlideIndex => {
  if (targetSlideIndex === 0) {
    previousButton.setAttribute('hidden', true)
    nextButton.removeAttribute('hidden')
  } else if (targetSlideIndex === dots.length - 1) {
    previousButton.removeAttribute('hidden')
    nextButton.setAttribute('hidden', true)
  } else {
    previousButton.removeAttribute('hidden')
    nextButton.removeAttribute('hidden')
  }
}



setSlidePositions()

nextButton.addEventListener('click', event => {
  const currentSlide = contents.querySelector('.is-selected')
  const nextSlide = currentSlide.nextElementSibling
  
  switchSlide(currentSlide, nextSlide)

  const nextSlideIndex = slides.findIndex(slide => slide === nextSlide)
  showHideArrowButtons(nextSlideIndex)

  const currentDot = dotsContainer.querySelector('.is-selected')
  const nextDot = currentDot.nextElementSibling
  highlightDot(currentDot, nextDot)
})

previousButton.addEventListener('click', event => {
  const currentSlide = contents.querySelector('.is-selected')
  const previousSlide = currentSlide.previousElementSibling
  switchSlide(currentSlide, previousSlide)

  const previousSlideIndex = slides.findIndex(slide => slide === previousSlide)
  showHideArrowButtons(previousSlideIndex)

  const currentDot = dotsContainer.querySelector('.is-selected')
  const previousDot = currentDot.previousElementSibling
  highlightDot(currentDot, previousDot)
})


dotsContainer.addEventListener('click', event => {
  const dot = event.target.closest('button')

  // Early return to stop execution if not dot
  if (!dot) return

  const currentSlide = contents.querySelector('.is-selected')
  const targetSlideIndex = dots.findIndex(d => d === dot)
  const slideToShow = slides[targetSlideIndex]
  switchSlide(currentSlide, slideToShow)

  showHideArrowButtons(targetSlideIndex)

  const currentDot = dotsContainer.querySelector('.is-selected')
  highlightDot(currentDot, dot)
})

