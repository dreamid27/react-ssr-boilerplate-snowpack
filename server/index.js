import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';
import config from '../webpack.config';
import serverRenderer from './server';
import { MODE } from '@shared/config';

const app = express();
const port = process.env.PORT || 3000;

/* handle prod mode */
if (MODE !== 'prod') {
  const compiler = webpack(config());
  /* Webpack HMR, Magic Happening Here */
  app.use(webpackDevMiddleware(compiler, {
    serverSideRender: true,
  }));
  app.use(webpackHotMiddleware(compiler.compilers.find((d) => d.name === 'client')));
  app.use(webpackHotServerMiddleware(compiler));
}

app.use(express.static(`${__dirname}/dist-client`));
app.use(serverRenderer());
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
