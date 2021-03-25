const Router = require('@koa/router');
const httpRequest = require('./httpRequest');
const config = require('../config');
// const router = new Router({ prefix: '/api' });
const router = new Router({ prefix: '/browser' });
// /browser/*

// jwt
// const jwt_secret = "lalala";

router.post('/perfData', async (ctx, next) => {

  // const {code} = ctx.request.body;
  console.log(ctx.request, 'request.bodyrequest.body');
  console.log(ctx.request.body, 'request.bodyrequest.body');
  ctx.body = '5566';
  // next();

  // ctx.app.context.le_code = code;
  // ctx.le_code = code;
  // const result = await httpRequest({
  //   url: `https://api.weixin.qq.com/sns/jscode2session?appid=${config.APPID}&secret=${config.APP_SECRET}&js_code=${code}&grant_type=authorization_code`
  // });

});

router.post('/decryptUser', async (ctx, next) => {
  // ctx.router available

  console.log(ctx.path, ctx.request.body, ctx.aaa, 'hhhhhhhhh');

  const {encryptedData, iv} = ctx.request.body;

  // ctx.body = '5566';
});


module.exports = router;
