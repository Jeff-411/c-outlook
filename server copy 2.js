import express from 'express'
import cors from 'cors'
import { promises as fs } from 'fs'
import path from 'path'
import { removeCSSFromHTML } from './modules/processInbox.js'

const app = express()
const PORT = 8080
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

app.use(cors())
app.use(express.static('public'))
app.use(express.json({ limit: '50mb' })) // Adjust the limit as needed

app.post('/process-html', async (req, res) => {
  const html = jsonParse(req.body)
  // Process the HTML as needed

  // Define file paths
  // const inputFilePath = path.join(__dirname, 'temp-input.html')
  // const outputFilePath = path.join(__dirname, 'temp-output.html')
  const inputFilePath = path.join(process.cwd(), 'temp-input.html')
  const outputFilePath = path.join(process.cwd(), 'temp-output.html')

  try {
    // Save the received HTML to a temporary file
    await fs.writeFile(inputFilePath, html, 'utf-8')

    // Process the HTML to remove CSS
    await removeCSSFromHTML(inputFilePath, outputFilePath)

    // Read the processed HTML
    const processedHtml = await fs.readFile(outputFilePath, 'utf-8')

    // Send the processed HTML back in the response
    res.json({ processedHtml })
  } catch (error) {
    console.error('Error processing HTML:', error)
    res.status(500).json({ error: 'Failed to process HTML' })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
