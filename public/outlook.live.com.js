// ****************************************************************************
// IMPORTANT: Witchcraft script(s) below: Do NOT delete or uncomment!

// @include script/app.js
// ****************************************************************************

function adjustScale() {
  const zoomLevel = window.devicePixelRatio || 1
  console.log(`zoomLevel: ${zoomLevel}`)

  document.querySelector('#O365_NavHeader').style.transform = `scale(${1 / zoomLevel})`
}

// window.addEventListener('resize', adjustScale)
// window.addEventListener('load', adjustScale)

window.onload = function () {
  const inboxHtml = document.documentElement.outerHTML

  console.log(`\n====================== Onload: inboxHtml:\n ${inboxHtml}\n\n`)

  // window.addEventListener('resize', adjustScale)
  // window.addEventListener('load', adjustScale)

  // sendPageHtmlToServer(inboxHtml)
}
