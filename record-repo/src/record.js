import axios from 'axios'
const rrweb = require('rrweb')
let events = [];

const stopFn = rrweb.record({
  emit(event) {
    // 将 event 存入 events 数组中
    if(event.length > 100){
        // 当事件数量大于 100 时停止录制
      stopFn();
    }
    events.push(event);
  },
});

// save 函数用于将 events 发送至后端存入，并重置 events 数组
function save() {
  const body = JSON.stringify({ events });
  events = [];
  axios.post('http://localhost:3333/user/addBehavior',{
    username:'lucky winty',msg:'test testApi',data:body
  })
}

// 每 10 秒调用一次 save 方法，避免请求过多
setInterval(save, 10 * 1000);
// setTimeout(save, 10 * 1000)