import React from 'react';
import ReactDOMClient from 'react-dom/client';
import Root from './Root.jsx';
import singleSpaReact, { SingleSpaContext } from 'single-spa-react';
import { registerApplication, start } from "single-spa";

 const app = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // https://reactjs.org/docs/error-boundaries.html
    return <div>This renders when a catastrophic error occurs</div>;
  },
});

// Registrar la aplicación con single-spa
registerApplication({
  name: "app-mf-react",
  app,
  activeWhen: ["/"],
  customProps: {
    codigo: "002",
    nombre: "Microfrontend en React"
  }
});

start();