// app.js

const test = {
  a: 'pickle',
  b: 'cow',
}

// async function sendPageHtmlToServer(html) {
//   console.log(`\n====================== sendPageHtmlToServer`)

//   console.log(`\n====================== sendPageHtmlToServer: html: ${html}\n\n`)

//   try {
//     const response = await fetch('http://localhost:8080/process-html', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'text/html',
//       },
//       body: html,
//     })
//     if (!response.ok) {
//       throw new Error('====================== Network response was not ok')
//     }
//     const data = await response.json()
//     console.log('====================== Server response:', data)
//   } catch (error) {
//     console.error('Error sending HTML to server:', error)
//   }
// }

function sendPageHtmlToServer() {
  // Get the HTML of the current page
  const pageHtml = document.documentElement.outerHTML

  // Define the server endpoint
  const serverUrl = 'http://localhost:8080/process-html'

  // Send the HTML to the server
  fetch(serverUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ html: pageHtml }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('\n=====\n=====\n=====\n========== FETCH Success:', data)

      document.documentElement.outerHTML = data
    })
    .catch(error => {
      console.error('Error:', error)
    })
}
