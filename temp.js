import express from 'express'
import cors from 'cors'
import { promises as fs } from 'fs'
import path from 'path'
import { removeCSSFromHTML } from './modules/processInbox.js'

const app = express()
const PORT = 8080

// Configure CORS to allow requests from outlook.live.com
const corsOptions = {
  origin: ['https://outlook.live.com', `http://localhost:${PORT}`],
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.use(express.static('public'))
app.use(express.json({ limit: '50mb' }))

app.post('/process-html', async (req, res) => {
  const { html } = req.body

  const inputFilePath = path.join(process.cwd(), 'temp-input.html')
  const outputFilePath = path.join(process.cwd(), 'temp-output.html')

  try {
    await fs.writeFile(inputFilePath, html, 'utf-8')
    await removeCSSFromHTML(inputFilePath, outputFilePath)
    const processedHtml = await fs.readFile(outputFilePath, 'utf-8')
    res.json({ processedHtml })
  } catch (error) {
    console.error('Error processing HTML:', error)
    res.status(500).json({ error: 'Failed to process HTML' })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
