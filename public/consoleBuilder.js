if (typeof console != "undefined") {
  if (typeof console.log != 'undefined') {
    console.gambi = console.log
  } else {
    console.gambi = function () { }
  }
}

console.log = function () {
  console.gambi.apply(console, arguments)
  const message = {
    type: 'console',
    message: arguments[0]
  }
  parent.postMessage(message, parent.location.origin)
}

window.onerror = console.log
