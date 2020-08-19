//报价
import React from 'react';
import '../assets/css/input.module.css'
import { Card, Button, InputItem } from 'antd-mobile';
class Offer extends React.Component{
    render() {
        return (
            <div>
                <div>
                    <img style={{height:'4rem',width:'100%'}}  src="https://img.zcool.cn/community/01e8095dc10cb4a8012163ba3da23b.jpg@260w_195h_1c_1e_1o_100sh.jpg" alt=""/>
                </div>
                <Card>
                    <Card.Header
                        title="10S 填写计算报价"
                    />
                    <Card.Body>
                        <InputItem
                            clear
                            ref={el => this.inputRef = el}
                        >您的称呼</InputItem>
                        <InputItem
                            clear
                            ref={el => this.inputRef = el}
                        >联系方式</InputItem>
                        <InputItem
                            clear
                            ref={el => this.inputRef = el}
                        >房屋面积</InputItem>
                        <Button type="warning">获取报价</Button>
                    </Card.Body>
                    <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                </Card>
            </div>
        )
    }
}

export default Offer;