const Koa = require('koa');
const app = new Koa();

const apiRouter = require('./router/route');

const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors'); // 没有他ctx.session 获取不到
const config = require('./config');


//配置session的中间件
app.use(cors({
  credentials: true
}));

app.use(bodyParser());

app
  .use(apiRouter.routes())
  .use(apiRouter.allowedMethods());

app.use(async(ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Credentials', true);
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With, zjp, ctt');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  ctx.set('Allow', 'PUT, POST, GET, DELETE, OPTIONS');
  if (ctx.method === 'OPTIONS') {

      ctx.body = 200;

  }
  // ctx; // is the Context
  // ctx.request; // is a koa Request
  // ctx.response; // is a koa Response

  await next();
});

app.use(async ctx => {
  console.log('*******************');

  ctx.body = 'Hello World';
});

app.on('error', (err, ctx) => {
  console.log('server error', err, ctx);
  if((ctx.status === 404 && err.status === undefined) || err.status === 500){
    return;
  }
});

app.listen(process.env.PORT || config.port, () => {
  console.log('成功监听端口', process.env.PORT );
});
