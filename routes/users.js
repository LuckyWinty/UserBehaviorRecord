const router = require('koa-router')();
const db = require('../db');
const utils =  require('../utils/index')

router.get('/user/getBehavior', async (ctx, next) => {
  console.log('entry user----------------',ctx.req.body)
  let uid = 'test';
  let sql = 'SELECT * FROM t_behavior', value = [uid];
  await db.query(sql, value).then(res => {
      if (res && res.length > 0) {
          ctx.body = { recode:0, data: res[0] };
      } else {
          ctx.body = {recode:-1,msg:'result error'};
      }
  }).catch(e => {
      ctx.body = {recode:-1,msg:'error'};
  })
});
router.post('/user/addBehavior', async (ctx, next) => {
  console.log('-------ctx----',ctx.request.body)
  //获取ip
  const ip = utils.getClientIp(ctx.request);
  //文件名
  const date = +new Date();
  const fileName = `./dataFile/${date}.json`;
  //接收数据
  const {username, data, msg} = ctx.request.body;
  utils.writeFile(fileName, data);

  await db.add([username, ip, new Date(), fileName, msg], 't_behavior').then((dataBase) => {
    ctx.body = {
      recode:0,msg: 'success'
    }
});
});

module.exports = router
