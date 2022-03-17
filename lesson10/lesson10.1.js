const el = document.querySelector('.stuff')
el.innerHTML = `
<ol>
<li>pizza</li>
<li>burrito</li>
<li>no thai</li>
<li>hungry</li>
</ol>
`
const foods = [...document.querySelectorAll('li')]
const donut = foods[3]
donut.textContent = 'donut'
