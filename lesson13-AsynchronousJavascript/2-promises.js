function buyCake(cakeType) {
  return new Promise((resolve, reject) => {
    cakeType === 'black forest'
      ? resolve('😄')
      : reject(new Error('😸'))
  })
}

// buyCake('pikachu forest')
  // .then(reaction => console.log(reaction))
  // .catch(reaction => console.log(reaction))

// const promise = fetch('https://api.github.com/users/zellwk/repos')
// console.log(promise)


// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'post',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     title: 'This is my first article',
//     body: 'I like you, lets be friends'
//   })
// })
//   .then(r => r.json())
//   .then(d => console.log(d))

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: 'Super awesome title',
      body: 'Some super awesome content for you'
    })
  })
    .then(r => r.json())
    .then(d => console.log(d))

fetch('https://jsonplaceholder.typicode.com/posts/90', {
  method: 'delete'
})
  .then(r => r.json())
  .then(d => console.log(`${d} I guess it's deleted`))
