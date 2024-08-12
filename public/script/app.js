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
      // console.log('\n=====\n=====\n=====\n==========  => Success:', data)

      // Replace the inner content of the document element
      document.documentElement.innerHTML = data.processedHtml
    })
    .catch(error => {
      console.error('Error:', error)
    })
}
