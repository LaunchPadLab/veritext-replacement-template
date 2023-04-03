import express from 'express'
import path from 'path'
import enforceSSL from 'express-enforces-ssl'
import { createProxyMiddleware } from 'http-proxy-middleware'
import compression from 'compression'
import exposeEnvMiddleware from 'expose-env-middleware'
import { loadEnv, loadPublicEnv } from '../fe/config/env.js'
import morgan from 'morgan'
import { logger, stream } from './src/utils/logger.js'
import cors from 'cors'
import * as url from 'url'
import cookieParser from 'cookie-parser'
import { ErrorMiddleware } from './src/middlewares/error.middleware.js'

loadEnv()

export class App {
  // add routes as a parameter
  constructor(routes) {
    const { PORT, NODE_ENV, PROXIED_API_URL, PROXIED_API_TOKEN } = process.env

    this.app = express()
    this.env = NODE_ENV || 'development'
    this.port = PORT || 8080
    this.proxied_api_url = PROXIED_API_URL || ''
    this.proxied_api_token = PROXIED_API_TOKEN || ''

    this.initializeFrontend()
    this.initializeMiddlewares()
    this.initializeRoutes(routes)
    // this.initializeSwagger();
    this.initializeErrorHandling()
  }

  listen() {
    this.app.listen(this.port, () => {
      logger.info(`=================================`)
      logger.info(`======= ENV: ${this.env} =======`)
      logger.info(`🚀 App listening on the port ${this.port}`)
      logger.info(`=================================`)
    })
  }

  getServer() {
    return this.app
  }

  initializeFrontend() {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
    // Use build folder for static files
    this.app.use(express.static('build'))
    this.app.get('/env', exposeEnvMiddleware(loadPublicEnv))

    // TODO ADD ERROR HANDLING FOR UNKNOWN ROUTES
    // this.app.get('*', (req, res) =>
    //   res.sendFile(path.join(__dirname, '../', '/build/index.html'))
    // )
  }

  initializeProxy() {
    if (NODE_ENV === 'production') {
      this.app.enable('trust proxy')
      this.app.disable('x-powered-by')
      this.app.use(enforceSSL())
    }

    // Proxy requests if proxy API url is provided
    if (PROXIED_API_URL)
      this.app.use(
        '/proxy',
        createProxyMiddleware({
          target: PROXIED_API_URL,
          headers: { Authorization: `Bearer ${PROXIED_API_TOKEN}` },
          secure: true,
          changeOrigin: true,
          pathRewrite: {
            '^/proxy/': '/',
          },
        })
      )
  }

  initializeMiddlewares() {
    const REJECTED_METHODS = ['TRACE']
    const { ORIGIN, CREDENTIALS, LOG_FORMAT } = process.env
    this.app.use((req, res, next) => {
      if (REJECTED_METHODS.includes(req.method)) return res.sendStatus(405)
      return next()
    })
    this.app.use(morgan(LOG_FORMAT, { stream }))
    this.app.use(cors({ origin: ORIGIN, credentials: CREDENTIALS }))
    // this.app.use(hpp());
    // this.app.use(helmet());
    this.app.use(compression())
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(cookieParser())
  }

  initializeRoutes(routes) {
    routes.forEach((route) => {
      this.app.use('/api', route.router)
    })
  }

  initializeSwagger() {
    const options = {
      swaggerDefinition: {
        info: {
          title: 'REST API',
          version: '1.0.0',
          description: 'Example docs',
        },
      },
      apis: ['swagger.yaml'],
    }
    const specs = swaggerJSDoc(options)
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
  }

  initializeErrorHandling() {
    this.app.use(ErrorMiddleware)
  }
}
