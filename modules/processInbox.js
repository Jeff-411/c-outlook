import { promises as fs } from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

// Function to get the directory name of the current module
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export async function removeCSSFromHTML(inputFilePath, outputFilePath) {
  try {
    // Read the file content
    const content = await fs.readFile(inputFilePath, 'utf-8')

    // Remove <link> tags that reference CSS files
    const contentWithoutLinkTags = content.replace(/<link[^>]*rel=["']stylesheet["'][^>]*>/gi, '')

    // Remove <style> tags
    const contentWithoutStyleTags = contentWithoutLinkTags.replace(
      /<style[^>]*>[\s\S]*?<\/style>/gi,
      ''
    )

    // Write the modified content to a new file
    await fs.writeFile(outputFilePath, contentWithoutStyleTags, 'utf-8')

    console.log(
      `\n\nremoveCSSFromHTML => Modified HTML content has been written to ${outputFilePath}`
    )
  } catch (error) {
    console.error('Error reading or processing the file:', error)
    throw error
  }
}

// Example usage
// const inputFilePath = path.join(__dirname, 'page-inbox.html')
// const outputFilePath = path.join(__dirname, 'page-inbox-no-css.html')
// removeCSSFromHTML(inputFilePath, outputFilePath)
//   .then(() => {
//     console.log('Processing complete.')
//   })
//   .catch(error => {
//     console.error('Error:', error)
//   })
