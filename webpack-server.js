const path = require('path');
const LoadablePlugin = require('@loadable/webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv, envKeys) => {
  const prodMode = argv && argv.mode === 'production';

  let entryPoint = [path.join(__dirname, 'server/server.js')];

  if (prodMode) {
    entryPoint = [path.join(__dirname, 'server/index.js')];
  }

  return {
    name: 'server',
    entry: entryPoint,
    target: 'node',
    node: {
      __dirname: false,
      __filename: false,
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
          test: /\.(png|jpe?g|gif|svg)$/i,
          loader: 'file-loader',
          options: {
            name: '[path][name].[hash].[ext]',
            emitFile: false,
          },
        },
        {
          test: /.node$/,
          use: {
            loader: 'node-loader',
          },
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.MODE': JSON.stringify(prodMode ? 'prod' : 'dev'),
        ...envKeys,
      }),
      new LoadablePlugin({ writeToDisk: true }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
    ],
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'server.js',
      libraryTarget: 'commonjs2',
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
