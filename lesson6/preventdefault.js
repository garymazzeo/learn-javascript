const links = document.querySelectorAll('a')

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()
    console.log(e.currentTarget, e.eventPhase)
  })
})
