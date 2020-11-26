const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const LoadablePlugin = require('@loadable/webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv, envKeys) => {
  const prodMode = argv && argv.mode === 'production';

  let entryPoint = [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    path.join(__dirname, 'src/index.jsx'),
  ];

  if (prodMode) {
    entryPoint = [
      path.join(__dirname, 'src/index.jsx'),
    ];
  }

  return {
    name: 'client',
    entry: {
      index: entryPoint,
    },
    devtool: 'inline-source-map',
    mode: prodMode ? 'production' : 'development',
    stats: 'minimal',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(js|jsx)$/,
          use: 'react-hot-loader/webpack',
          include: /node_modules/,
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          loader: 'file-loader',
          options: {
            name: '[path][name].[contenthash].[ext]',
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin({
        'process.env.BUNDLER': JSON.stringify('webpack'),
        'process.env.MODE': JSON.stringify(prodMode ? 'prod' : 'dev'),
        ...envKeys,

      }),
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: 'index_client.html', // why not index.html ? it's prevent for default select with express static
      }),
      new WebpackBar(),
      new webpack.HotModuleReplacementPlugin(),
      new LoadablePlugin({ writeToDisk: true }),
      // new BundleAnalyzerPlugin(),
    ],
    devServer: {
      contentBase: path.resolve(__dirname, 'dist-client'),
      publicPath: '/',
      hot: true,
      overlay: true,
      port: 9090,
      index: 'index_client.html',
      historyApiFallback: {
        index: '/index_client.html',
      },
      open: true,
    },
    output: {
      filename: prodMode ? '[name].[hash].js' : '[name].js',
      path: path.resolve(__dirname, 'build/dist-client'),
      publicPath: '/',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@shared': path.resolve(__dirname, 'src/shared'),
        '@pages': path.resolve(__dirname, 'src/pages'),
      },
    },
  };
};
