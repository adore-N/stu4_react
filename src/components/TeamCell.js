import React from 'react';
import {Link} from "react-router-dom";
import '../assets/css/teamdetail.css'
import queryString from 'query-string'
import {Badge,Carousel,Card} from "antd-mobile";

class TeamCell extends React.Component{
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    };

    render() {
        let {listData} = this.props;
        return (
            <div>
                {
                    listData && listData.map( (value,index)=>(
                        <div className={'teamdetail'} style={{marginBottom:'10px'}} key={value._id}>
                            <Link  key={value._id}  to={{pathname:'/teamdetail/'+ value._id,search:queryString.stringify({dataName:'designer'})}} >
                                <Card style={{background:'#f3f3f3'}}>
                                    <Badge text={'金牌'} corner>
                                        <Card.Header style={{height:100}}
                                                     thumb={React.server.baseUrl  +  value.icon}
                                                     title={<div>
                                                         <p>
                                                             <span style={{font:'700 20px/30px ""'}}>{value.name}</span>
                                                             <span style={{font:'700 14px/30px ""',color:"#999",margin:'0 10px'}}>{value.nickname}</span>
                                                             <span style={{font:'700 14px/30px ""',color:"#999"}}>{value.worktime}</span></p>
                                                         <p style={{font:'700 14px/30px ""',color:"#999"}}>{value.style}</p>
                                                     </div>}
                                        />
                                    </Badge>
                                    <Card.Body style={{overflow:'hidden',paddingBottom:40}} >
                                        <Carousel className="space-carousel"
                                                  frameOverflow="visible"
                                                  cellSpacing={10}
                                                  slideWidth={0.6}
                                                  dots={false}
                                                  infinite

                                        >
                                            {this.state.data.map((val, index) => (
                                                <span
                                                    key={index}
                                                    style={{
                                                        display: 'block',
                                                        position: 'relative',
                                                        top: this.state.slideIndex === index ? -10 : 0,
                                                        height: this.state.imgHeight,
                                                        boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                                                    }}
                                                >
                                                    <img
                                                        src='https://img.zcool.cn/community/019db05dbfe3e6a801209e1f5fce66.jpg@260w_195h_1c_1e_1o_100sh.jpg'
                                                        alt=""
                                                        style={{ width: '100%', verticalAlign: 'top' ,height:'200px',touchAction:'none',}}
                                                        onLoad={() => {
                                                            // fire window resize event to change height
                                                            window.dispatchEvent(new Event('resize'));
                                                        }}
                                                    />
                                                </span>
                                            ))}
                                        </Carousel>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))
                }
            </div>

        )

    }}

export default TeamCell;