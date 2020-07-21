'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/login', controller.home.loginGet);
  router.post('/api/login', controller.home.loginPost);
};
