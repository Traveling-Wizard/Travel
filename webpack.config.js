const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  target: 'web',
  devtool: 'eval-source-map',

  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    historyApiFallback: true,

    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: {
      '/cards/**': {
        target: 'http://localhost:5050/',
      },
      '/users/**': {
        target: 'http://localhost:5050/',
      },
      '/static/**': {
        target: 'http://localhost:5050/',
      },
    },
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './public/index.html'),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};
