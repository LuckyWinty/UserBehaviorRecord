const router = require('koa-router')();
const db = require('../db');
import { getClientIp,writeFile } from '../utils/index'

router.get('/user/getBehavior', async (ctx, next) => {
  console.log('entry user')
  let uid = 'test';
  let sql = 'SELECT * FROM t_behavior WHERE id=1', value = [uid];
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
  //获取ip
  const ip = getClientIp(ctx);
  //文件名
  const date = +new Date();
  const fileName = `./dataFile/${date}.json`;

  //接收数据
  const {username, data, msg} = ctx.body;
  writeJSON(fileName, data);
});

module.exports = router
