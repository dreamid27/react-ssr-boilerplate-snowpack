const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const { env } = require('process');
const dotenv = require('dotenv');
const clientConfig = require('./webpack-client');
const serverConfig = require('./webpack-server');

module.exports = (env, argv) => {
  const listENV = dotenv.config().parsed;
  const envKeys = {};
  Object.keys(listENV).forEach((item) => {
    envKeys[item] = listENV[item];
  });
  return [clientConfig(env, argv, envKeys), serverConfig(env, argv, envKeys)];
};
