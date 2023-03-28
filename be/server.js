const express = require('express')
const path = require('path')
const enforceSSL = require('express-enforces-ssl')
const { createProxyMiddleware } = require('http-proxy-middleware')
const compression = require('compression')
const exposeEnvMiddleware = require('expose-env-middleware')
const { loadEnv, loadPublicEnv } = require('../fe/config/env')

loadEnv()

const {
  PORT=8080,
  NODE_ENV='development',
  PROXIED_API_URL='',
  PROXIED_API_TOKEN='',
} = process.env

const app = express()

// Enable production specific middleware
if (NODE_ENV === 'production') {
  // Enforce https connections
  app.enable('trust proxy')
  app.disable('x-powered-by')
  app.use(enforceSSL())
  // Enable gzip compression to decrease response body size to increase speed
  app.use(compression())
}

// Reject blacklisted http methods
const REJECTED_METHODS = ['TRACE']
app.use((req, res, next) => {
  if (REJECTED_METHODS.includes(req.method)) return res.sendStatus(405)
  return next()
})

// Use build folder for static files
app.use(express.static('build'))

// Expose env variables to JS code
app.get('/env', exposeEnvMiddleware(loadPublicEnv))

// Send main index file for every request
app.get('*', (req, res) => res.sendFile(path.join(__dirname, "../", '/build/index.html')))

// Proxy requests if proxy API url is provided
if (PROXIED_API_URL) app.use('/proxy', createProxyMiddleware({
  target: PROXIED_API_URL,
  headers: { Authorization: `Bearer ${ PROXIED_API_TOKEN }` },
  secure: true,
  changeOrigin: true,
  pathRewrite: {
    '^/proxy/': '/'
  }
}))

// Start server
const server = app.listen(PORT, () => console.log(`Express server listening on port ${ PORT }`))

// Pretty format port-in-use error
server.on('error', e => {
  if (e.code === 'EADDRINUSE') {
    console.log(`Port ${ PORT } is already in use!`)
    process.exit(1)
  }
})
