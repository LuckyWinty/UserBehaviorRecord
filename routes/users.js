const router = require('koa-router')()
const db = require('../db');

router.get('/user/behavior', async (ctx, next) => {
  let uid = ctx.session.uid;
  let sql = 'SELECT url,user,msg,ip,date,dataFile FROM t_behavior WHERE uid=?', value = [uid];
  await db.query(sql, value).then(res => {
      if (res && res.length > 0) {
          ctx.body = { recode:0, data: res[0] };
      } else {
          ctx.body = {recode:-1,msg:'error'};
      }
  }).catch(e => {
      ctx.body = {recode:-1,msg:'error'};
  })
});

module.exports = router
