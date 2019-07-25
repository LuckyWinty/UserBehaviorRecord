import React, { useEffect } from 'react'
import axios from 'axios'
import WrappedDemo from './component/FromTest'
import { Card, Col, Row } from 'antd';
const rrweb = require('rrweb')

const Record = ()=>{
    const userRecord = ()=>{
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
        // setInterval(save, 10 * 1000);
        window.onerror = function (msg, url, lineNo, columnNo, error) {
          //进入一次上报一次先
          save()
          return false;
        };
    }
    useEffect(()=>{
      userRecord()
    },[])
    return (
    <div style={{
      width:'500px',
      margin:'50px auto'
    }}>
      <h3>First Test!</h3>
      <WrappedDemo />
      <div style={{ background: '#ECECEC', padding: '30px' ,margin:'20px auto'}}>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </div>
    </div>)
}
export default Record
