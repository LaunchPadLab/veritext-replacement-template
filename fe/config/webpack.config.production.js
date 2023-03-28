const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const DotIndexPlugin = require('dot-index-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { loadEnv } = require('./env')
const paths = require('./paths')
const aliases = require('./aliases')
const bourbonIncludePaths = require('bourbon').includePaths
const neatIncludePaths = require('bourbon-neat').includePaths

loadEnv()
process.env.NODE_ENV = process.env.NODE_ENV || 'production'
if (!['production', 'test'].includes(process.env.NODE_ENV)) {
  throw new Error('Builds must be in production or test environment.')
}

// Display full deprecation warnings, if any
process.traceDeprecation = true

module.exports = {
  bail: true,
  devtool: 'source-map',
  entry: [
    paths.jsFolder,
  ],
  mode: 'production',
  module: {
    rules: [
      // Process JS with Babel
      {
        include: paths.sourceFolder,
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
      },
      // `MiniCssExtractPlugin` first applies our loaders, then grabs the
      // result CSS and puts it in a separate file. This way we actually ship a
      // single CSS file in production instead of JS code injecting
      // <style> tags.
      {
        include: paths.sourceFolder,
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer')
                ]
              }
            }
          },
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
    ],
  },
  // Create a single, separate chunk for all vendor (node_modules) dependencies.
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  output: {
    assetModuleFilename: 'static/media/[hash][ext][query]',
    filename: 'static/js/[name].[contenthash].js',
    path: paths.outputFolder,
    publicPath: '/',
  },
  plugins: [
    /**
     * All files inside webpack's output.path directory will be removed once, but the
     * directory itself will not be.
     *
     * During rebuilds, all webpack assets that are not used anymore
     * will be removed automatically.
     *
     */
    new CleanWebpackPlugin({
      verbose: true,
    }),
    // Automatically create .index files
    new DotIndexPlugin({
      path: paths.jsFolder,
    }),
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
      template: paths.htmlTemplate,
    }),
    // Copy all files in /public to /build; do not generate an error if there
    // are no public files.
    new CopyWebpackPlugin({
      patterns: [{
        from: paths.publicFolder,
        to: paths.outputFolder,
        globOptions: {
          ignore: ['**/.keep'],
        },
        noErrorOnMissing: true,
      }],
    }),
    // Use env from exposeEnvMiddleware
    new webpack.DefinePlugin({
      'process.env': 'window.process.env'
    }),
    // Remove extraneous moment locales
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/),
    // Put CSS into a single file
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash].css',
    })
  ],
  resolve: {
    alias: aliases(paths.sourceFolder),
    // Webpack 5 no longer polyfills Node modules. See:
    //  https://stackoverflow.com/questions/64557638/how-to-polyfill-node-core-modules-in-webpack-5
    // for possible solutions, perhaps using https://github.com/Richienb/node-polyfill-webpack-plugin.
    fallback: {
      fs: false,
      net: false,
      tls: false,
    },
    // Resolve .index files correctly
    mainFiles: ['index', '.index'],
  },
}

