const container = document.createElement('div')
container.style.width = '500px'
container.style.height = '450px'
container.style.overflow = 'auto'
container.style.margin = '0 auto'

for(let i = 0; i < 30; i++) {
  let p = document.createElement('p')
  p.innerText = `Text${i+1}`
  container.appendChild(p)
}

document.body.appendChild(container)

container.addEventListener('scroll', function (ev) {
  console.log(ev)
})
