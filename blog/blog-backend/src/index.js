const Koa = require('koa');
const Router = require('koa-router');

const api = require('./api');

const app = new Koa();
const router = new Router();

/*
//app.use는 미들웨어 함수를 어플리케이션에 등록해줌
// parameter : 첫번째는 ctx(context, 웹 요청과 응답에 대한 정보), 두번째는 next(현재 처리중인 미들웨어의 다음 미들웨어를 호출)
app.use(async(ctx, next) => {
  console.log(ctx.url);
  console.log(1);
  if (ctx.query.authorized !== '1') {
    ctx.status = 401;
    return;
  }
  await next();
  console.log('END');
});

app.use((ctx, next) => {
  console.log(2);
  next();
});

app.use((ctx) => {
  ctx.body = 'hello';
});
*/

/*
// router.get(<경로>, 미들웨어 함수)
router.get('/', (ctx) => {
  ctx.body = 'Home';
});

router.get('/about/:name?', (ctx) => {
  // about 뒤에 name이 오는지 여부에 따라 결정
  //'/about/:name' 와 같이 ?를 빼버리면 name이 없을 때 not found를 들고옴.
  const { name } = ctx.params; // 라우트 경로에서 :(파라미터명) 으로 정의된 값이 ctx.params 안에 설정됨
  console.log(name);
  ctx.body = name ? `${name}입니다` : 'Introduce';
});

router.get('/posts', (ctx) => {
  // id의 존재 여부에 대하여 출력
  const { id } = ctx.query; // 쿼리를 들고옴
  ctx.body = id ? `포스트 ${id}` : `포스트 아이디가 없습네다`;
});
*/

router.use('/api', api.routes());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Listening to port 3000');
});