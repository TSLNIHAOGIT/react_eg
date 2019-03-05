import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = DefaultRouter;

let routes = [
  {
    "path": "/HelloWorld",
    "exact": true,
    "component": require('../HelloWorld.js').default
  },
  {
    "path": "/antd_eg",
    "exact": true,
    "component": require('../antd_eg.js').default
  },
  {
    "path": "/content",
    "exact": true,
    "component": require('../content.js').default
  },
  {
    "path": "/shoppinglist_react",
    "exact": true,
    "component": require('../shoppinglist_react.js').default
  },
  {
    "component": () => React.createElement(require('F:/陶士来文件/tsl_webpage_project/antd_course/node_modules/_umi-build-dev@1.5.5@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/page', hasRoutesInConfig: false })
  }
];
window.g_routes = routes;
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  window.g_plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
window.g_history.listen(routeChangeHandler);
routeChangeHandler(window.g_history.location);

export default function RouterWrapper() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
