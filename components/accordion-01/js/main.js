// listen for click on header button
// set class to is-open
// open content
// switch icon

const accordions = Array.from(document.querySelectorAll('.accordion'))
const accordionContainer = document.querySelector('.accordion-container')

accordionContainer.addEventListener('click', e => {
  const accordionHeader = e.target.closest('.accordion__header')
  if (!accordionHeader) return

  const accordion = accordionHeader.parentElement
  const accordionContent = accordionHeader.nextElementSibling
  const accordionInner = accordionContent.children[0]
  
  const height = accordion.classList.contains('is-open')
    ? 0
    : accordionInner.getBoundingClientRect().height

  accordionContent.style.height = `${height}px`
  accordion.classList.toggle('is-open')
})

// accordions.forEach(accordion => {
//   accordionHeader = accordion.querySelector('.accordion__header')
//   accordionHeader.addEventListener('click', e => {
//     accordion.classList.toggle('is-open')
//   })
// })

// function openAccordian(el) {
//   el.classList.add('is-open')
// }

// Array.from(accordianButtons).forEach((button) =>
//   button.addEventListener('click', openAccordian)
// )

// const firstAccordion = document.querySelector('.accordion')
// const firstAccordionHeader = firstAccordion.querySelector('.accordion__header')

// firstAccordionHeader.addEventListener('click', e =>
//   firstAccordion.classList.toggle('is-open')
// )

