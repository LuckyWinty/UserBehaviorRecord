const router = require('koa-router')();
const db = require('../db');
const utils =  require('../utils/index')

router.get('/user/getBehavior', async (ctx, next) => {
  let uid = 'test';
  let sql = 'SELECT * FROM t_behavior', value = [uid];
  await db.query(sql, value).then(res => {
    const readfile = [];
      if (res && res.length > 0) {
          for(let i = 0;i <res.length;i++){
            readfile.push(utils.readFile(res[i].dataFile))
          }
          return Promise.all(readfile).then((events)=>{
            console.log('----finished events')
            ctx.body = { recode:0, data: res,events:events };
          })
          // ctx.body = { recode:0, data: res };
      } else {
          ctx.body = {recode:-1,msg:'result error'};
      }
  }).catch(e => {
      ctx.body = {recode:-1,msg:'error'};
  })
});
router.post('/user/addBehavior', async (ctx, next) => {
  //获取ip
  const ip = utils.getClientIp(ctx.request);
  //文件名
  const date = +new Date();
  const fileName = `dataFile/${date}.json`;
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
