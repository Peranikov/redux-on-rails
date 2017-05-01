const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin');

const config = {
  entry: {
    "games/main": './client/src/games/index.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'public', 'assets'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  plugins: [
    new ManifestPlugin()
  ]
};

module.exports = config;