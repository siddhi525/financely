// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js', // Adjust this to the entry point of your application
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: [
          /node_modules\/inversify/
        ],
      },
      // ... other rules ...
    ],
  },
  devtool: 'source-map', // Adjust based on your preference
};
