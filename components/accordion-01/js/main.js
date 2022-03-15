// listen for click on header button
// set class to is-open
// open content
// switch icon

/**
 * Finds the correct height of the accordion content
 * @param {HTMLElement} accordion The accordion
 * @returns {Number} Accordion content's height in px value
 */
const getContentHeight = accordion => {
  const accordionInner = accordion.querySelector('.accordion__inner')
  
  if (accordion.classList.contains('is-open')) return 0
  return accordionInner.getBoundingClientRect().height
}

/**
 * Toggles the accordion open or closed
 * @param {HTMLElement} accordion The accordion
 * @param {Number} height The current height of the accordion
 */
const updateAccordion = (accordion, height) => {
  const accordionContent = accordion.querySelector('.accordion__content')

  // Updates the accordion
  accordion.classList.toggle('is-open')
  accordionContent.style.height = `${height}px`
}

const accordionContainer = document.querySelector('.accordion-container')

accordionContainer.addEventListener('click', e => {
  const accordionHeader = e.target.closest('.accordion__header')
  if (!accordionHeader) return

  const accordion = accordionHeader.parentElement
  const height = getContentHeight(accordion)
  
  updateAccordion(accordion, height)
})
