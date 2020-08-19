//联系
import React from 'react';
import {Flex,Button,InputItem} from "antd-mobile";

class Contact extends React.Component{
    render() {
        return (
            <div>
                <div>
                    <img style={{height:'4rem',width:'100%'}}  src="https://img.zcool.cn/community/01e8095dc10cb4a8012163ba3da23b.jpg@260w_195h_1c_1e_1o_100sh.jpg" alt=""/>
                </div>
                <div className={'intro'}>
                    <h3>xxxx装饰公司</h3>
                    <p>地址:xxxxxxxxxxxxxxxxxxxxxxx</p>
                </div>
                <Flex justify="center">
                    <Flex.Item>
                        <InputItem
                        placeholder="输入手机号"
                        />
                    </Flex.Item>
                    <Flex.Item><Button>default</Button></Flex.Item>
                </Flex>

                <div style={{height:500,background:'#ccc'}}>地铁</div>
            </div>
        )
    }
}

export default Contact;