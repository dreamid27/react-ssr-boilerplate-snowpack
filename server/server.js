import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '@shared/Layout.jsx';
import { StaticRouter } from 'react-router-dom';
import { ChunkExtractor } from '@loadable/server';
import Helmet from 'react-helmet';
import template from './template';

const serverRenderer = () => async (req, res) => {
  const statsFile = './dist-client/loadable-stats.json';
  const extractor = new ChunkExtractor({ statsFile, entrypoints: ['index'] });
  const context = {};

  const appString = renderToString(extractor.collectChunks(
    <StaticRouter location={req.url} context={context}><App /></StaticRouter>,
  ));
  const scriptTags = extractor.getScriptTags(); // or extractor.getScriptElements();
  const styleTags = extractor.getStyleTags(); // or extractor.getStyleElements();
  const linkTags = extractor.getLinkTags(); // or chunkExtractor.getLinkElements();

  const helmet = Helmet.renderStatic();
  res.send(template({
    scripts: scriptTags,
    style: styleTags,
    body: appString,
    title: helmet.title.toString(),
    meta: helmet.meta.toString(),
    link: helmet.link.toString(),
    linkTags,
    htmlAttributes: helmet.htmlAttributes.toString(),
  }));
};

export default serverRenderer;
