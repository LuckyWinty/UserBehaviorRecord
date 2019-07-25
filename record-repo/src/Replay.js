import React from 'react'
import axios from 'axios'
import { Button } from 'antd';
import rrwebPlayer from 'rrweb-player'

const Replay = ()=>{
    const handlePlay = async ()=>{
        const result =  await axios.get('http://localhost:3333/user/getBehavior')
        const data = result.data
        // if(!data.recode)return
        const events = data.events
        console.log('events---',events)
        for(let i =0;i < events.length;i++){
            const eventData = JSON.parse(events[i]).events
            if(eventData.length < 2)continue;
            new rrwebPlayer({
                target: document.querySelector('#replayer'), // 可以自定义 DOM 元素
                data: {
                  events:JSON.parse(events[i]).events,
                },
            });
        }
    }
    return (
        <>
            <div style={{width:'500px',margin:'50px auto'}}>
                <Button type="primary" onClick={handlePlay}>回放</Button>
            </div>
            <div id={'replayer'} style={{
                height: '600px',
                width: '1200px',
                margin:'20px auto'}}>
            </div>
        </>
    )
}
export default Replay
