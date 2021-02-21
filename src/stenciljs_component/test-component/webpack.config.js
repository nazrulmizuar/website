const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './bundle.js',
  output: {
    filename: 'mycomponent.js',
    path: path.resolve(__dirname, '../../../js'),
  }
/*   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'node_modules/my-library/dist/my-library/assets'),
          to: path.resolve(__dirname, 'dist/assets'),
        },
      ],
    }),
  ], */
};