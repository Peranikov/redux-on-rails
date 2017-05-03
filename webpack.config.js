const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin');

const config = {
  target: 'web',
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
        test: /\.json$/,
        loader: 'json-loader'
      },
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
  ],
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  devtool: "inline-source-map"
};

module.exports = config;