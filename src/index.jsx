import React from 'react';
import { hydrate, render } from 'react-dom';
import Layout from '@shared/Container';
import { loadableReady } from '@loadable/component';
import { BrowserRouter } from 'react-router-dom';

const renderMethod = module.hot ? hydrate : render;

loadableReady(() => {
  const root = document.getElementById('app');
  renderMethod(
    <BrowserRouter>
      <Layout />
    </BrowserRouter>,
    root,
  );
});
