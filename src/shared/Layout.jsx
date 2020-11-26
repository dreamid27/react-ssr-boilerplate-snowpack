import React from 'react';
import {
  Link, Route, Switch,
} from 'react-router-dom';
import loadable from '@loadable/component';
import { Helmet } from 'react-helmet';

function Status({ code, children }) {
  return (
    <Route render={({ staticContext }) => {
      if (staticContext) staticContext.status = code;
      return children;
    }}
    />
  );
}

function NotFound() {
  return (
    <Status code={404}>
      <div>
        <h1>Sorry, can’t find that.</h1>
      </div>
    </Status>
  );
}

const HomePage = loadable(() => import(/* webpackChunkName: "home-page" , webpackPrefetch: true */ '../pages/Home'));
const AboutPage = loadable(() => import(/* webpackChunkName: "about-page", webpackPrefetch: true */ '../pages/About'));
const FaqPage = loadable(() => import(/* webpackChunkName: "faq-page", webpackPrefetch: true */ '../pages/Faq'));

const App = () => (
  <div>
    <Helmet>
      <title>React Boilerplate</title>
    </Helmet>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/faq" component={FaqPage} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
