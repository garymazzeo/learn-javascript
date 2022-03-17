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
 * Get the index of the current slide from click event
 * @returns Index of the current slide
 */
const getCurrentSlideIndex = _ => {
  const currentSlide = contents.querySelector('.is-selected')
  return slides.findIndex(slide => slide === currentSlide)
}


/**
 * Moves current slide out, moves target slide in
 * @param {HTMLElement} currentSlide Current slide showing
 * @param {HTMLElement} targetSlide Slide to move into place
 */
const switchSlide = (currentSlideIndex, targetSlideIndex) => {
  const currentSlide = slides[currentSlideIndex]
  const targetSlide = slides[targetSlideIndex]
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
const highlightDot = (currentSlideIndex, targetSlideIndex) => {
  const currentDot = dots[currentSlideIndex]
  const targetDot = dots[targetSlideIndex]
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
  const currentSlideIndex = getCurrentSlideIndex()
  const nextSlideIndex = currentSlideIndex + 1
  
  switchSlide(currentSlideIndex, nextSlideIndex)
  highlightDot(currentSlideIndex, nextSlideIndex)
  showHideArrowButtons(nextSlideIndex)
})

previousButton.addEventListener('click', event => {
  const currentSlideIndex = getCurrentSlideIndex()
  const previousSlideIndex = currentSlideIndex - 1

  switchSlide(currentSlideIndex, previousSlideIndex)
  highlightDot(currentSlideIndex, previousSlideIndex)
  showHideArrowButtons(previousSlideIndex)
})


dotsContainer.addEventListener('click', event => {
  const dot = event.target.closest('button')
  if (!dot) return

  const currentSlideIndex = getCurrentSlideIndex()
  const targetSlideIndex = dots.findIndex(d => d === dot)

  switchSlide(currentSlide, targetSlideIndex)
  highlightDot(currentSlideIndex, targetSlideIndex)
  showHideArrowButtons(targetSlideIndex)
})

