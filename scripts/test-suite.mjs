import { exec, log } from './helpers.mjs'

async function main() {
  try {
    // Build project first to ensure .index.js files are up-to-date
    log('Building project...')
    exec('NODE_ENV=test yarn --cwd fe run build')

    log('Running unit fe tests...')
    exec('yarn --cwd fe run test:unit')

    log('Running integration tests...')
    const doSeed = !process.argv.includes('no-seed')
    const port = process.env.PORT || 8080
    await runIntegrationTest(port, doSeed)
  } catch (e) {
    log(e, 'red')
    process.exit(1)
  }
}

async function runIntegrationTest(port, doSeed) {
  if (doSeed) {
    log('Seeding test database...')
    exec('yarn --cwd fe run seed:test')
  }
  log('Starting server...')
  // Run server in the background, redirect output to /dev/null
  exec(
    `nohup bash -c "PORT=${port} NODE_ENV=test yarn be:server" > /dev/null 2>&1&`
  )
  log('Running tests...')
  try {
    exec('yarn run test:integration')
  } finally {
    // Kill server no matter what
    killNodeServer(port)
  }
}

function killNodeServer(port) {
  return exec(`kill -9 $(lsof -t -i :${port} -a -c node)`)
}

main()
