import React from 'react';
import '../assets/css/headernav.css';
import {Drawer, List, NavBar, Icon} from 'antd-mobile';


class Header extends React.Component{
    state = {
        open: false,
        dd:'none',
        logo: true,
        title: '首页'
    };
    static getDerivedStateFromProps(nextProps,nextState){
        if(nextProps.location.pathname === '/home'){
            return {title: '首页'}
        } else if(nextProps.location.pathname === '/freedesign'){
            return {title:'免费设计',logo:false}
        } else if(nextProps.location.pathname === '/offer'){
            return {title:'免费设计',logo:false}
        } else if(nextProps.location.pathname === '/contact'){
            return {title:'联系我们',logo:false}
        } else if(nextProps.location.pathname === '/phone'){
            return {title:'在线询问',logo:false}
        } else if(nextProps.location.pathname === '/designlist'){
            return {title: '家具效果图',logo: false}
        }else if(nextProps.location.pathname.indexOf('/designdetail') !== -1 ) {
            return {title: '效果图', logo: false}
        } else if(nextProps.location.pathname.indexOf('/designteam') !== -1 ) {
            return {title: '设计团队', logo: false}
        }
        return  {}
    }
    onOpenChange1 = (...args) => {
        console.log(args);
        if(this.state.dd === 'none'){
            this.setState({ open: !this.state.open, dd:'block'});
        }
        if(this.state.dd === 'block'){
            this.setState({ open: !this.state.open, dd:'none'});
        }
    };
    render() {
        // fix in codepen
        const sidebar = (<List>
            {[0, 1, 2, 3, 4, 5, 6].map((i, index) => {
                if (index === 0) {
                    return (<List.Item key={index}
                                       thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                                       multipleLine
                    >Category</List.Item>);
                }
                return (<List.Item key={index}
                                   thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                >Category{index}</List.Item>);
            })}
        </List>);
        return (
            <div style={{position:"fixed",left:0,right:0,top:0,zIndex:555}}>
                <Drawer
                    className="my-drawer"
                    style={{ minHeight: document.documentElement.clientHeight,marginTop:45,display:this.state.dd,}}
                    enableDragHandle={false}
                    contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 ,display:this.state.dd}}
                    overlayStyle={{display:this.state.dd}}
                    sidebar={sidebar}
                    open={this.state.open}
                    onOpenChange={this.onOpenChange1}
                    position={"right"}
                >
                    &nbsp;
                </Drawer>
                <NavBar
                    leftContent={ this.state.logo === true ? 'LOGO' : <Icon type="left" size='lg' onClick={()=>{this.props.history.go(-1)}} />}
                    rightContent={<Icon type="ellipsis" onClick={this.onOpenChange1} />}
                    style={ this.props.location.pathname === '/home' ? {background:'#222'} : {background:'rgba(0,0,0,0)'} }
                >{this.state.title}</NavBar>
            </div>
        )
    }
}
export default Header;