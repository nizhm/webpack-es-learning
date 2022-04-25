/**
 * Get path of an Element from the root EventTarget window
 *
 * @param element {HTMLElement}
 * @param mark {string|empty}
 * @return {string} node path string from window
 */
const getPathOfNode = function getPathOfNode(element, mark = '->') {
  if (this instanceof getPathOfNode) {
    throw new TypeError(`'getPathOfNode' function is not a Constructor.`)
  }

  if (!(element && element instanceof HTMLElement)) {
    throw new Error(`${element} is not a valid HTMLElement.`)
  }

  const pathArray = []
  function getNodeName(node) {
    pathArray.unshift(node.nodeName.toLowerCase())
    if (node.parentNode) {
      getNodeName(node.parentNode)
    }
  }
  getNodeName(element)
  pathArray.unshift('window')

  return pathArray.join(mark)
}

/**
 * Event phases
 *
 * @type {{'1': string, '2': string, '3': string}}
 */
const EventPhases = {
  '1': 'capture phase',
  '2': 'target phase',
  '3': 'bubble phase'
}

const container = document.createElement('div')
container.setAttribute('style', `border: 1px solid #67C23A; width: 500px; height: 500px; margin: 0 auto; text-align: center`)
const p = document.createElement('p')
p.style.margin = '50% auto'
p.style.border = '1px solid #E6A23C'
p.innerText = 'inner'
container.appendChild(p)
document.body.appendChild(container)

const propagationPaths = []
function showEvents(paths) {
  if (!paths.length) return

  let pathsLength = paths.length
  let currentIndex = 0
  const changeBGColor = (index, paths) => {
    console.log(index)
    const path = paths[index]
    let previousPath = null
    if (index > 0) {
      previousPath = paths[index - 1]
    }

    if (path === window || path === document || path === document.documentElement) {
      alert(path)
      if (document.body.style.backgroundColor) {
        document.body.style.backgroundColor = ''
      }

      if (currentIndex === (pathsLength - 1)) {
        propagationPaths.length = 0
      }
      setTimeout(() => {
        if ((currentIndex + 1) <= (pathsLength - 1)) {
          currentIndex++
          changeBGColor(currentIndex, paths)
        }
      }, 100)

      return
    }

    previousPath.style.backgroundColor = ''
    path.style.backgroundColor = '#409EFF'

    setTimeout(() => {
      if ((currentIndex + 1) <= (pathsLength - 1)) {
        currentIndex++
        changeBGColor(currentIndex, paths)
      }
    }, 1000)
  }
  changeBGColor(currentIndex, paths)
}

const clickHandler = function (ev) {
  console.log(`(${ev.eventPhase}--${EventPhases[ev.eventPhase]})on${ev.type} of CurrentTarget: ` + (ev.currentTarget === window ? 'window' : getPathOfNode(ev.currentTarget)))

  propagationPaths.push(ev.currentTarget)
  if (ev.currentTarget === window && ev.eventPhase === 3) {
    console.log(propagationPaths)
    showEvents(propagationPaths)
  }
}

const useCapture = true
window.addEventListener('click', clickHandler, useCapture)
document.addEventListener('click', clickHandler, useCapture)
document.documentElement.addEventListener('click', clickHandler, useCapture)
document.body.addEventListener('click', clickHandler, useCapture)
container.addEventListener('click', clickHandler, useCapture)
p.addEventListener('click', clickHandler, useCapture)
p.childNodes[0].addEventListener('click', clickHandler, useCapture)
window.addEventListener('click', clickHandler)
document.addEventListener('click', clickHandler)
document.documentElement.addEventListener('click', clickHandler)
document.body.addEventListener('click', clickHandler)
container.addEventListener('click', clickHandler)
p.addEventListener('click', clickHandler)
p.childNodes[0].addEventListener('click', clickHandler)
