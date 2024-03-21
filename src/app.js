import React from 'react';
import ReactDOMClient from 'react-dom/client';
import Root from './Root.jsx';
import singleSpaReact from 'single-spa-react';

 window.appReact = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // https://reactjs.org/docs/error-boundaries.html
    return <div>This renders when a catastrophic error occurs</div>;
  },
});