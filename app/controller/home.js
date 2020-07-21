'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async loginGet() {
    const { ctx } = this;
    // console.log('query',ctx.queries);
    // console.log('body',ctx.queries.body);
    ctx.body = 'welcome to use get';
  }
  async loginPost() {
    const { ctx } = this;
    // console.log('query',ctx);
     
    ctx.body = 'welcome to use post';
    console.log(ctx.request.body);
    // console.log(ctx);
  }
}

module.exports = HomeController;
