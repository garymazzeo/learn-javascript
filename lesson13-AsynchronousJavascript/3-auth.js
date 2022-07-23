import { token } from './private.js'

fetch('https://api.github.com/users/repos', {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
.then(r => r.json())
.then(d => console.log(d))
