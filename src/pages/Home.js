//首页
import React from 'react';

import {Grid, NoticeBar, Card, InputItem, Flex, Button, Tabs, Badge, Carousel, List} from 'antd-mobile';
import style from '../assets/css/input.module.css'
import {getDate,getRealData} from "../store/actions";
import {UPDATE_EIGHT, UPDATE_FOUR, UPDATE_STYLEDATA, UPDATE_TEAM,UPDATE_BANNER,TEST} from "../store/types";
import {connect} from "react-redux";
import Banner from "../components/Banner";
import queryString from "query-string";
import {Link} from "react-router-dom";
class Home extends React.Component{

    componentDidMount() {
        this.props.getEight();
        this.props.getFour();
        this.props.getStyleData();
        this.props.getTeamData();
        this.props.getBanner();

        this.makeMoney = () => {
            this.setState({
                price: this.S.state.value * 1000
            })
        };


    }
    state = {
        imgHeight: 176,
        price:'',
    };

    render() {
        const tabs = [
            { title: <Badge >现代风格</Badge> },
            { title: <Badge >欧美风格</Badge> },
            { title: <Badge >中式风格</Badge> },
            { title: <Badge >田园风格</Badge> },
        ];
        const eights = [
            {title: '设计团队',route:'/designteam'},
            {title: '免费报价',route:'/offer'},
            {title: '德系精工',route:'/home'},
            {title: '免费设计',route:'/freedesign'},
            {title: '实景工地',route:'/home'},
            {title: '效果图',route:'/designlist'},
            {title: '关于我们',route:'/contact'},
            {title: '参观工地',route:'/home'},
        ];
        //八个宫格的数据
        let {four,styleData,teamData,banner,history} = this.props;
        const  eightData = eights.map((_val, i) => ({
            icon: `/assets/img/${i+1}.png`,
            text: _val.title,
            route:_val.route,
        }));
        //四个宫格的数据
        const  fourData = four.map((_val, i) => ({
            icon: _val.icon2,
        }));
        //装修效果图的数据
        const styleDataDetail = Array.from(styleData).map((_val, i) => ({
            icon: _val.icon2,
            text: _val.sub_title,
            style: _val.title
        }));
        return (
            <div >
                <Banner {...this.props} banner={banner}/>
                {/*//通知栏*/}
                <NoticeBar mode="link" onClick={() => console.log(1)} style={{color:'#222',background:'#D7D7D7'}}>
                    xxx装饰集团在xxxx年-xxxx年获取互联网口碑装修公司
                </NoticeBar>
                {/*八个宫格*/}
                <Grid data={eightData}
                      columnNum={4}
                      hasLine={false}
                      itemStyle={{width:100,height:100,background:'#f3f3f3'}}
                      renderItem={dataItem => (
                          <div style={{ padding: '.12px',marginTop:'0.25rem'}}>
                              <img src={dataItem.icon} style={{ width: '.8rem', height: '.8rem' }} alt="" />
                              <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                  <span>{dataItem.text}</span>
                              </div>
                          </div>
                      )}
                      onClick = {dataItem => this.props.history.push(dataItem.route)}
                />
                <br/>
                {/*四个宫格*/}
                <Grid data={fourData}
                      columnNum={2}
                      itemStyle={{width:200,height:180,background:'#f3f3f3'}}
                      renderItem={dataItem => (
                          <div style={{ padding: '.12px',marginTop:'0.25rem'}}>
                              <img src={dataItem.icon} style={{ width: '2.8rem', height: '150px' }} alt="" />
                          </div>
                      )}
                      onClick={(el,index)=>this.chooseRoute(el,index)}
                />
                {/*获取报价*/}
                <Card style={{background:'#111',marginTop:10}}>
                    <Card.Header
                        title={<span style={{color:'#fff',width:'300'}}>xxx装修可以省多少钱</span>}
                        extra={<span>已有xxx获取报价</span>}
                        style={{height:48}}
                    />
                    <Card.Body>
                        <InputItem
                            ref={el => this.price = el}
                            value={this.state.price}
                        />
                       <div style={{display:'flex',marginTop:10}}>
                           <div style={{width:'80%',display:'flex',flexDirection:'column',justifyContent:'space-between',
                            paddingRight:10
                           }}>
                               <List>
                                   <InputItem
                                       clear
                                       ref={el => this.autoFocusInst2 = el}
                                       className={style.input}
                                   >您的称呼</InputItem>
                               </List>
                               <InputItem
                                   clear
                                   ref={el => this.autoFocusInst = el}
                                   className={style.input}
                               >联系方式</InputItem>
                               <List>
                                   <InputItem
                                       clear
                                       ref={el => this.S = el}
                                       className={style.input}
                                   >装修面积</InputItem>
                               </List>
                           </div>
                           <div style={{width:'20%'}}>
                               <Button style={{height:'95%',fontSize:20,paddingTop: 32}} onClick={this.makeMoney}>获取<br/>报价</Button>
                           </div>
                       </div>
                    </Card.Body>
                </Card>
                {/*装修效果图*/}
                <Card style={{background:'#F3F3F3',marginTop:10}}>
                    <Card.Header
                        title={<span style={{color:'#111',width:'300'}}>装修效果图</span>}
                        extra={<span>more</span>}
                        style={{height:48}}
                    />
                    <Card.Body>
                        <Tabs tabs={tabs}
                              initialPage={0}
                              // onChange={(tab, index) => { console.log('onChange', index, tab); }}
                              onTabClick={(tab, index) => { this.props.getStyleData(tab,index)}}
                              tabBarBackgroundColor={'#f3f3f3'}
                        >
                            <div  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',width:'100%', height: '450px', backgroundColor: '#f3f3f3' }}>
                                    <Grid data={styleDataDetail}
                                          columnNum={2}
                                          itemStyle={{height:220,width:'2.8rem',background:'#f3f3f3'}}
                                          renderItem={(dataItem ,index)=> (
                                <Link to={{pathname:`/designdetail/${index+1}`,search:queryString.stringify({dataName:dataItem.style})}} key={index}>
                                              <div style={{ padding: '12.5px',paddingTop:0,paddingBottom:0 }}>
                                                  <img src={dataItem.icon} style={{ width: "2.8rem", height: '150px' }} alt="" />
                                                  <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                                      <span>{dataItem.text}</span>
                                                  </div>
                                              </div>
                                </Link>
                                          )}
                                        // onClick={(el,index)=>console.log(el,index)}
                                    />
                            </div>
                        </Tabs>
                    </Card.Body>
                </Card>
                {/*设计团队*/}
                <Card style={{overflow:'hidden',background:'#F3F3F3',marginTop:10,marginBottom:60}}>
                    <Card.Header
                        title="设计团队"
                        extra={<span>more</span>}
                    />
                    <Card.Body>
                        <Carousel className="space-carousel"
                                  frameOverflow="visible"
                                  cellSpacing={10}
                                  slideWidth={0.5}
                                  infinite
                                  dots={false}
                                  // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                                  afterChange={index => this.setState({ slideIndex: index })}
                        >
                            {teamData.map((val, index) => (
                                <a
                                    key={val._id}
                                    style={{
                                        display: 'block',
                                        position: 'relative',
                                        top: this.state.slideIndex === index ? -10 : 0,
                                        height: this.state.imgHeight,
                                        boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                                    }}
                                    onClick={()=>{
                                        console.log(val._id);
                                        history.push({pathname:'/teamdetail/' + val._id,search:queryString.stringify({dataName:'designer'})})
                                    }}
                                >
                                    <img
                                        src={React.server.baseUrl + val.icon}
                                        alt=""
                                        style={{ width: '100%', verticalAlign: 'top',touchAction:'none',height:250}}
                                        onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({ imgHeight: 'auto' });
                                        }}
                                    />
                                    <div style={{position:"absolute",background:'#ccc',bottom:0,left:0,height:80,width:'100%',touchAction:'none',}}>{val.nickname}</div>
                                </a>
                            ))}
                        </Carousel>
                    </Card.Body>
                    <div className={'car_footer'} style={{display:'flex',justifyContent:'',height:'50px',padding:'0 10px'}}>
                        <input type="text" name="" id="" style={{border:'1px solid #d0d0d0',width:'70%',height:'94%',marginTop:'1px',background:'#eee'}}/>
                        <Button  style={{background:'#c89f6b',height:'100%',color:'#fff',borderRadius:0,width:'30%'}}>0元设计</Button>
                    </div>
                </Card>
            </div>
        )
    }
}
// export default Home;
const mapStateToProps = state => ({
    four: state.four,
    styleData: state.styleData,
    teamData: state.teamData,
    banner: state.banner,
    test:state.test
});

const mapDispatchToProps = (dispatch, ownProps)=>(
    {
        //获取轮播图的数据
        getBanner: () => dispatch(getDate({
            url: '/mock/banner',
            type: UPDATE_BANNER,
            _limit:4
        })),
        getEight: () => dispatch(getDate({
            url: '/mock/eight',
            type: UPDATE_EIGHT,
            _limit: 8
        })),
        getFour: () => dispatch(getDate({
            url: '/mock/eight',
            type: UPDATE_FOUR,
            _limit:4,

        })),
        getStyleData: (tab,index) =>{
            // console.log(tab);
            dispatch(getDate({
                url: '/mock/eight',
                type: UPDATE_STYLEDATA,
                _limit:4,
                _page: index + 1
            }))
        },
        //设计团队数据
        getTeamData: () => dispatch(getRealData({
            url: '/design/designer',
            type: UPDATE_TEAM,
            _limit:5,
        })),
    }
);
const Container = connect(mapStateToProps,mapDispatchToProps)(Home);
export default Container;