const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const DotIndexPlugin = require('dot-index-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const { loadEnv, loadPublicEnv } = require('./env')
const paths = require('./paths')
const aliases = require('./aliases')
const bourbonIncludePaths = require('bourbon').includePaths
const exposeEnvMiddleware = require('expose-env-middleware')
const neatIncludePaths = require('bourbon-neat').includePaths

loadEnv()
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

// Display full deprecation warnings, if any
process.traceDeprecation = true

module.exports = {
  devServer: {
    port: process.env.FE_PORT,
    allowedHosts: 'all',
    client: {
      logging: 'none',
      overlay: {
        warnings: false,
      }
    },
    compress: true,
    devMiddleware: {
      stats: 'minimal',
    },
    historyApiFallback: true,
    hot: true,
    // Create API proxy in case we need it.
    proxy: {
      '/proxy': {
        target: process.env.PROXIED_API_URL || '/',
        headers: { Authorization: `Bearer ${ process.env.PROXIED_API_TOKEN || '' }` },
        logLevel: 'debug',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/proxy/': '/'
        }
      }
    },
    // Expose env variables to JS code
    setupMiddlewares: (middleware, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined')
      }

      devServer.app.get('/env', exposeEnvMiddleware(loadPublicEnv))

      return middleware
    },
    static: {
      directory: paths.publicFolder,
      publicPath: '/',
      watch: {
        ignored: [
          '**/node_modules',
        '.index.js',
        ],
      },
    },
    // Required to use react-dev-utils/webpackHotDevClient.
    // See: https://stackoverflow.com/questions/59363237/websocket-handshake-error-in-react-after-yarn-upgrade
    webSocketServer: 'ws',
  },
  devtool: 'eval-source-map',
  entry: [
    // Include compilation error overlay
    'react-dev-utils/webpackHotDevClient',
    paths.jsFolder,
  ],
  mode: 'development',
  module: {
    rules: [
      // Process JS with Babel
      {
        include: paths.sourceFolder,
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
        ],
      },
      {
        include: paths.sourceFolder,
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [
                  ...bourbonIncludePaths,
                  ...neatIncludePaths,
                ],
                // Neat (which has been deprecated) triggers a Sass build warning.
                // This will be resolved when Neat is no
                // longer utilized. See: https://github.com/LaunchPadLab/client-template/issues/386.
                // In the meantime, suppress this build warning via the
                // "quietDeps" option.
                quietDeps: true,
              }
            }
          }
        ]
      },
      // Process image assets
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  },
  optimization: {
    runtimeChunk: true,
  },
  output: {
    assetModuleFilename: 'static/media/[hash][ext][query]',
    publicPath: '/'
  },
  plugins: [
    new DotIndexPlugin({
      path: paths.jsFolder,
    }),
    // Automatically find JavaScript code issues
    new ESLintPlugin(),
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      template: paths.htmlTemplate,
    }),
    // Use env from exposeEnvMiddleware
    new webpack.DefinePlugin({
      'process.env': 'window.process.env'
    }),
    // Watcher doesn't work well if you mistype casing in a path so we use
    // a plugin that prints an error when you attempt to do this.
    new CaseSensitivePathsPlugin(),
  ],
  resolve: {
    alias: aliases(paths.sourceFolder),
    // Webpack 5 no longer polyfills Node modules. See:
    //  https://stackoverflow.com/questions/64557638/how-to-polyfill-node-core-modules-in-webpack-5
    // for possible solutions, perhaps using https://github.com/Richienb/node-polyfill-webpack-plugin.
    fallback: {
      url: require.resolve('url/'), 
      fs: false,
      net: false,
      tls: false,
    },
    // Resolve .index files correctly
    mainFiles: ['index', '.index'],
  },
}
