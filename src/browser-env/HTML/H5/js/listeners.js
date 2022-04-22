document.title = 'H5'

const documentAvailableEvents = [
  'abort',
  'animationend',
  'animationiteration',
  'animationstart',
  'auxclick',
  'beforecopy',
  'beforecut',
  'beforepaste',
  'beforexrselect',
  'blur',
  'cancel',
  'canplay',
  'canplaythrough',
  'change',
  'click',
  'close',
  'contextlost',
  'contextmenu',
  'contextrestored',
  'copy',
  'cuechange',
  'cut',
  'dblclick',
  'drag',
  'dragend',
  'dragenter',
  'dragleave',
  'dragover',
  'dragstart',
  'drop',
  'durationchange',
  'emptied',
  'ended',
  'error',
  'focus',
  'formdata',
  'freeze',
  'fullscreenchange',
  'fullscreenerror',
  'gotpointercapture',
  'input',
  'invalid',
  'keydown',
  'keypress',
  'keyup',
  'load',
  'loadeddata',
  'loadedmetadata',
  'loadstart',
  'lostpointercapture',
  'mousedown',
  'mouseenter',
  'mouseleave',
  'mousemove',
  'mouseout',
  'mouseover',
  'mouseup',
  'mousewheel',
  'paste',
  'pause',
  'play',
  'playing',
  'pointercancel',
  'pointerdown',
  'pointerenter',
  'pointerleave',
  'pointerlockchange',
  'pointerlockerror',
  'pointermove',
  'pointerout',
  'pointerover',
  'pointerrawupdate',
  'pointerup',
  'progress',
  'ratechange',
  'readystatechange',
  'reset',
  'resize',
  'resume',
  'scroll',
  'search',
  'securitypolicyviolation',
  'seeked',
  'seeking',
  'select',
  'selectionchange',
  'selectstart',
  'slotchange',
  'stalled',
  'submit',
  'suspend',
  'timeupdate',
  'toggle',
  'transitioncancel',
  'transitionend',
  'transitionrun',
  'transitionstart',
  'visibilitychange',
  'volumechange',
  'waiting',
  'webkitanimationend',
  'webkitanimationiteration',
  'webkitanimationstart',
  'webkitfullscreenchange',
  'webkitfullscreenerror',
  'webkittransitionend',
  'wheel'
]

const excludeEvents = [
  // two too frequent
  'mousemove',
  'pointermove',
  // experiment
  'pointerrawupdate',
  // learned
  'pointerenter',
  'pointerleave',
  'pointerover',
  'pointerout',
  'mouseenter',
  'mouseleave',
  'mouseover',
  'mouseout'
]

const documentEvents = documentAvailableEvents.filter(el => !excludeEvents.includes(el))

console.log('readystatechange:', document.readyState)
console.log('visibilitychange:', document.visibilityState)

for(const eventName of documentEvents) {
  document.addEventListener(eventName, function (event) {
    console.log(eventName+ ":")
    console.log(event)

    if (eventName === 'readystatechange') {
      console.log('readystatechange:', document.readyState)
    }

    if (eventName === 'visibilitychange') {
      console.log('visibilitychange:', document.visibilityState)
    }

    if (eventName === 'contextmenu') {
      event.preventDefault()
    }
  })
}
