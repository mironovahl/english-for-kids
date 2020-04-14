const webpack=require('webpack');
const path=require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';

  const config={
    mode: isProduction ? 'production':'development',
    devtool:isProduction ? 'none':'source-map',
    watch:!isProduction,
    entry: ['./src/index.js', './src/sass/style.scss'],
    output:{
      path: path.join(__dirname,'/dist'),
      filename:'script.js'
    },
    module:{
      rules: [
        /* {
          enforce: 'pre',
          test: /\.(js|ts)$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            emitError: true,
            emitWarning: true,
            failOnError: true
          }
        } */{
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },{
          test:/\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,'css-loader','sass-loader'
          ]
        },{
          test: /\.(png|svg|jpe?g|gif|mp3)$/,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        }, 
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
             loader: 'file-loader',
            }
          ],
        },{
          test: /\.html$/,
          loader: 'html-loader',
        }
      ]
    },

    plugins:[
      //new CleanWebpackPlugin(), 
      new HtmlWebpackPlugin({
        template: 'index.html'
      }),
      new MiniCssExtractPlugin({
        filename:'style.css'
      }),
      new CopyPlugin([
        { from: './src/audio', to: './src/audio' },
        { from: './src/img', to: './src/img' },
      ]),
    ]
  }

  return config;
}