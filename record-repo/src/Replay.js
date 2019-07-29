import React,{ useState } from 'react'
import axios from 'axios'
import rrwebPlayer from 'rrweb-player'
import moment from 'moment'
import { Form, Icon, Input, Button ,DatePicker} from 'antd';
const Replay = ()=>{
    const [searchParams, setSearchParams] = useState({})

    const handlePlay = async ()=>{
        console.log('params,',searchParams)
        const result =  await axios.get('http://localhost:3333/user/getBehavior',{params:searchParams})
        const data = result.data
        if(data.recode === -1)return
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
    const setParams = (key,value)=>{
        const temp = {...searchParams}
        temp[key] = value
        setSearchParams(temp)
    }
    return (
        <>
            <Form layout="inline" onSubmit={handlePlay} style={{ width: '1000px',margin:'100px auto' }}>
                <Form.Item label="username">
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                        onChange={(e)=>{
                            setParams('username',e.target.value)
                        }}
                    />
                </Form.Item>
                <Form.Item label="time">
                    <DatePicker
                        format="YYYY-MM-DD HH:mm:ss"
                        showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                        onChange={(date,string)=>{
                            setParams('date',string)
                        }}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={handlePlay}>回放</Button>
                </Form.Item>
            </Form>
            <div id={'replayer'} style={{
                height: '600px',
                width: '1200px',
                margin:'20px auto'}}>
            </div>
        </>
    )
}
export default Replay
