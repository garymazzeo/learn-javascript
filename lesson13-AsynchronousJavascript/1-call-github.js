const request = new XMLHttpRequest()
request.addEventListener('load', e => {
  // Turn json into js
  const repos = JSON.parse(e.target.response)
  
  // Massage the data
  const data = repos.map(repo => {
    return {
      name: repo.name,
      url: repo['html_url'],
      stars: repo['stargazers_count']
    }
  })
  // console.log(data)

  // Put the info on the page
  const ol = document.createElement('ol')
  
  ol.innerHTML = data.map(repo => {
  return `<li><a href="${repo.url}">${repo.name} (${repo.stars} stars)</a></li>`
  }).join('')
  
  document.body.appendChild(ol)
})

request.open('get', 'https://api.github.com/users/garymazzeo/repos')
request.send()




const zellRequest = new XMLHttpRequest()
zellRequest.addEventListener('load', e => {
  const zellRepos = JSON.parse(e.target.response)

  const zellData = zellRepos.map(repo => {
    return {
      name: repo.name,
      url: repo['html_url'],
      stars: repo['stargazers_count']
    }
  })

  const zellList = document.createElement('ol')

  zellList.innerHTML = zellData
    .filter(repo => repo.stars >= 50)
    .map(wellWatched =>{
      return `<li><a href="${wellWatched.url}">${wellWatched.name} (${wellWatched.stars} stars)</a></li>`
    }).join('')

  document.body.appendChild(zellList)
})

zellRequest.open('get', 'https://api.github.com/users/zellwk/repos')
zellRequest.send()

fetch('https://api.github.com/users/garymazzeo/repos')
  .then(response => response.json())
  .then(data => {
    const repos = data.map(repo => {
    return {
      name: repo.name,
      url: repo['html_url'],
      stars: repo['stargazers_count']
    }
  })
    console.log(repos)
})
