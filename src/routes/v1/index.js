const express = require('express');
const recordRoute = require('./record');
const docsRoute = require('./docs');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/records',
    route: recordRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
