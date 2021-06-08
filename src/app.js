import 'css-paint-polyfill'

document.addEventListener('DOMContentLoaded', () => {
  CSS.paintWorklet.addModule(`paintlets/connections.js`)
  // CSS.registerProperty({
  //   name: '--connections-point-count',
  //   syntax: '<number>',
  //   inherits: false,
  //   initialValue: 100
  // })
})
