const router = require('koa-router')()
const db = require('../db');

router.get('/user/behavior', async (ctx, next) => {
  console.log('entry user')
  let uid = 'test';
  let sql = 'SELECT url,user,msg,ip,date,dataFile FROM t_behavior WHERE id=1', value = [uid];
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

module.exports = router
