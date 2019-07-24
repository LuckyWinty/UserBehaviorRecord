import React from 'react'
import axios from 'axios'
import { Button } from 'antd';
const rrwebPlayer = require('rrwebPlayer')

const Replay = ()=>{
    const handlePlay = async ()=>{
        const result =  await axios.get('http://localhost:3333/user/getBehavior')
        if(!result.recode)return
        const events = result.data
        new rrwebPlayer({
            target: document.body, // 可以自定义 DOM 元素
            data: {
              events,
            },
          });
    }
    return (
    <div style={{width:'500px',margin:'50px auto'}}>
        <Button type="primary" onClick={handlePlay}>回放</Button>
    </div>
    )
}
export default Replay
