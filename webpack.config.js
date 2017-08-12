const path = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ReactCompilerPlugin = require('webpack-react-compiler-plugin')

module.exports = {
  entry: {
    main: './src/scripts/'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'client.js'
  },

  module: {
    rules: [
      { test: /\.jsx?$/, use: 'babel-loader' },
      { test: /main\.scss$/, loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']) },
      {
        test: /\.(?:jpe?g)$/i,
        use: [
          'babel-loader',
          './lib/exif-loader',
          'file-loader'
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader'
      }
    ]
  },

  plugins: [
    new ReactCompilerPlugin({
      entry: 'main',
      output: 'client.js'
    }),
    new ExtractTextPlugin('styles.css')
  ],

  devtool: 'cheap-module-eval-source-map'
}
