const box = document.querySelector('.box');
const circle = document.querySelector('.circle')

const tl = gsap.timeline()

tl.to(box, 2, {x:400})
  .to(circle, 3, {y:600})
  .to(circle, 4, {opacity:0})
