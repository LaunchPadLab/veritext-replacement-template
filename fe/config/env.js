const Figaro = require('figaro-js')
const { pickBy, mapValues } = require('lodash')
const { REQUIRED_KEYS } = require('./figaro')
const path = require('path')

// Converts strings to primitive values if possible
// Eg '5' -> 5, 'true' -> true, 'string' -> 'string'

function coerce(str) {
  try {
    return JSON.parse(str)
  } catch (e) {
    return str
  }
}

// Loads figaro values into process.env
function loadEnv() {
  Figaro.load({
    path: path.resolve(__dirname, './application.yml')
   })
  Figaro.requireKeys(...REQUIRED_KEYS)
}

// Returns public env for injection into code
function loadPublicEnv() {
  loadEnv()
  // Only expose variables that start with `REACT_APP`.
  // This helps ensure that nothing private gets exposed on the frontend.
  const publicEnv = pickBy(process.env, (value, key) =>
    key.startsWith('REACT_APP')
  )
  // Convert values into primitives
  return mapValues(publicEnv, coerce)
}

module.exports = { loadEnv, loadPublicEnv }
