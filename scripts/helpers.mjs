import chalk from 'chalk'
import { execSync } from 'child_process'
import CLIPrompt from 'cli-prompt'
import fs from 'fs-extra'

// Execute synchronous commands and output to terminal
export function exec(command) {
  return execSync(command, { stdio: 'inherit' })
}

// Wrapper for console log
export function log(message, color = 'yellow') {
  return console.log(chalk[color](message)) // eslint-disable-line no-console
}

// Promise-based prompt function
export function prompt(message, options = {}) {
  const { defaultValue = '', required = false } = options
  const _message = defaultValue
    ? message + `[default: ${defaultValue}] `
    : message
  return new Promise((resolve) =>
    CLIPrompt(_message, (value) => {
      const _val = value || defaultValue
      if (required && !_val) {
        log('⚠️  You must provide a value', 'red')
        return prompt(message, options)
      }
      return resolve(_val)
    })
  )
}

// Y/N confirmation
export async function confirm(message) {
  const answer = await prompt(message)
  if (answer.toLowerCase() === 'y') return true
  if (answer.toLowerCase() === 'n') return false
  log(`Sorry, I don't understand that answer. Please answer Y or N.`, 'red')
  return confirm(message)
}

// Read, transform and write file
export function editFile(filepath, transform) {
  const contents = fs.readFileSync(filepath, 'utf8')
  return fs.writeFileSync(filepath, transform(contents))
}
