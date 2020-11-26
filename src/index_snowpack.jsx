import React from 'react';
import { render } from 'react-dom';
import Layout from '@shared/ContainerSnowpack';
import { loadableReady } from '@loadable/component';
import { BrowserRouter } from 'react-router-dom';

loadableReady(() => {
  const root = document.getElementById('app');
  render(
    <BrowserRouter>
      <Layout />
    </BrowserRouter>,
    root,
  );
});

if (import.meta.hot) {
  import.meta.hot.accept();
}
