const tabs = Array.from(document.querySelectorAll('.tab'))
const tabContents = Array.from(document.querySelectorAll('.tab-content'))
const tabby = document.querySelector('.tabby')
const tabList = document.querySelector('.tabs')

// tabs.forEach(tab => {
//   tab.addEventListener('click', event => {
//     const target = tab.dataset.theme
//     const tabContent = tabby.querySelector(`#${target}`)
    
//     tabs.forEach(t => t.classList.remove('is-selected'))
//     tab.classList.add('is-selected')

//     tabContents.forEach(c => c.classList.remove('is-selected'))
//     tabContent.classList.add('is-selected')
//   })
// })

tabList.addEventListener('click', e => {
  const tab = e.target
  const target = tab.dataset.theme
  const tabContent = tabby.querySelector(`#${target}`)
  
  tabs.forEach(t => {t.classList.remove('is-selected')})
  tab.classList.add('is-selected')

  tabContents.forEach(c => {c.classList.remove('is-selected')})
  tabContent.classList.add('is-selected')
})
