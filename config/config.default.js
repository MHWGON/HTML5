/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    security:{     //关闭配置信息中的跨站信息伪造git 
      csrf:{
        enable:false,
      }
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1595299650424_7307';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
