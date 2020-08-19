import React from 'react';
import queryString from 'query-string';
import {getRealData,getRealDataDetail} from "../store/actions";
import {DESIGNDATAIL} from "../store/types";
import {connect} from "react-redux";
import {Carousel,WingBlank,Flex,Button} from "antd-mobile";
class DesignDetail extends React.Component{
    constructor(props){
        super(props);
        let id = props.match.params.id;
        let dataName = queryString.parse(props.location.search).dataName;
        // console.log(id,dataName);
        this.props.getListData(id,dataName)
    }
    state = {
        imgHeight: 176,
    };
    render() {
        let {designDetail} = this.props;
        return (
            <div>
                <div style={{position:'relative'}}>
                    <img src={designDetail.img && React.server.baseUrl + designDetail['img'][1]} alt=""
                         style={{width:'100%',height:"4rem"}}/>
                     <div style={{height:'1rem',position:'absolute',top:'.6rem',paddingLeft:'.2rem'}}>
                         <span style={{color:"#fff",font:'.24rem/1rem ""',}}>{designDetail.title}</span>
                         <img style={{verticalAlign: 'middle',marginLeft:'1rem'}} src={this.props.designDetail.detail && React.server.baseUrl + designDetail.auth_icon} alt=""/>
                     </div>
                    <Carousel
                        autoplay={false}
                        infinite
                        style={{width:'80%',height:'3rem',position:'absolute',top:'1.7rem',left:'.2rem'}}
                    >
                        {  designDetail.img && designDetail.img.map((val,index) => (
                            <a
                                key={index}
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={React.server.baseUrl + val}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' ,touchAction:'none',height:'3rem'}}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </div>
                <WingBlank style={{marginTop:'1rem'}}>
                    <Flex>
                        <Flex.Item style={{flex:'0.6'}}>
                            <input type="text"  placeholder={'输入手机号'} style={{background:'#fff',width:"100%",height:'47px',font:"18px/47px ''",paddingLeft:"10px",color:'#999'}}/>
                        </Flex.Item>
                        <Flex.Item style={{flex:'0.4',margin:0}}><Button style={{background:'#c79e68',color:"#fff",borderRadius:"0"}}>算算多少钱</Button></Flex.Item>
                    </Flex>
                </WingBlank>
                <WingBlank style={{marginTop:'.3rem'}}>
                    <h5 style={{font:"20px/30px ''",}}>案例信息</h5>
                    <Flex>
                        <Flex.Item style={{flex:'0.6'}}>
                            <p style={{font:"14px/30px ''",color:"#999"}}>小区说明:{designDetail.msg && designDetail.msg.name}</p>
                            <p style={{font:"14px/30px ''",color:"#999"}}>户型:{designDetail.msg && designDetail.msg.size}</p>
                        </Flex.Item>
                        <Flex.Item style={{flex:'0.4'}}>
                            <p style={{font:"14px/30px ''",color:"#999"}}>风格:{designDetail.style}</p>
                            <p style={{font:"14px/30px ''",color:"#999"}}>面积:{designDetail.msg && designDetail.msg.mianji}</p>
                        </Flex.Item>
                    </Flex>
                    <h5 style={{font:"20px/30px ''",marginBottom:10}}>设计说明</h5>
                    <p style={{font:"14px/28px ''",color:"#999" ,height:"3rem"}}>{designDetail.show && designDetail.show}</p>
                </WingBlank>
            </div>
        )
    }
}

const  mapStateToProps = state => ({
    designDetail: state.designDetail
});

const mapDispatchToProps = (dispatch,ownProps) => ({
    getListData: (id,dataName) => dispatch(getRealDataDetail(
        {
            url:`/design/${dataName}`,
            id:id,
            type: DESIGNDATAIL
        }
    ))
});

const Container = connect(mapStateToProps,mapDispatchToProps)(DesignDetail);
export default Container;
