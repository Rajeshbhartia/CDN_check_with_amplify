const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlReplaceWebpackPlugin = require("html-replace-webpack-plugin");

module.exports = [
  {
    entry: './src/app.js',
    mode: 'production',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },

    plugins: [

      new MiniCssExtractPlugin({
        filename: 'styles.css'
      }),
      new HtmlReplaceWebpackPlugin([
        {
          pattern: '<link href="styles.css" rel="stylesheet">',
          replacement: "",
        },
        {
          pattern:
            '<script defer="defer" src="bundle.js"></script>',
          replacement: "",
        },
      ]),
    ],

    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
          test: /\.html$/,
          exclude: /node_modules/,
          use: { loader: 'html-loader' }
        }
      ]
    },

    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          parallel: true,
        }),
        new CssMinimizerPlugin(),
      ],
    },
  }
];
