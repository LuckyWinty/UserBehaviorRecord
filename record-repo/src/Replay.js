import React from 'react'
import axios from 'axios'
import { Button } from 'antd';
import rrwebPlayer from 'rrweb-player'
const rrweb = require('rrweb')

const Replay = ()=>{
    const handlePlay = async ()=>{
        const result =  await axios.get('http://localhost:3333/user/getBehavior')
        const data = result.data
        // if(!data.recode)return
        const events = data.events
        console.log('events---',events)
        for(let i =0;i < events.length;i++){
            new rrwebPlayer({
                target: document.body, // 可以自定义 DOM 元素
                data: {
                  events:JSON.parse(events[i]).events,
                },
            });
        }
    }
    return (
    <div style={{width:'500px',margin:'50px auto'}}>
        <Button type="primary" onClick={handlePlay}>回放</Button>
    </div>
    )
}
export default Replay
