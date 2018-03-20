require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const Uglify = require('uglifyjs-webpack-plugin')
const basicConfig = require('./webpack.config.js')

const buildConfig = {
  ...basicConfig,
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'static',
  },
  plugins: [
    ...basicConfig.plugins,
    new Uglify(),
    new CleanWebpackPlugin(['build']),
  ],
}

module.exports = buildConfig
