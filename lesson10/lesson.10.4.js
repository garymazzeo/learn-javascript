// Remove Aragorn from the following HTML.
const humans = document.querySelector('.humans')
const aragorn = humans.children[2]
humans.removeChild(aragorn)

// Add it to the end of the list.
humans.appendChild(aragorn)
