// webpack.config.js

const {resolve} = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: resolve(__dirname, 'src/index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'footballfield_lineup.js',
    library: 'footballfield_lineup'
  },
  plugins: [
    new UglifyJsPlugin({
      exclude: [/\.min\.js$/gi] // skip pre-minified libs
    })
  ]
}