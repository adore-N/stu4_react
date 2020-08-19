import React from 'react';
import {TabBar} from "antd-mobile";
import '../assets/css/footer.css';

class Footer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
            hidden: false,
            fullScreen: false,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.checkPath(nextProps.location.pathname);
    }
    componentDidMount() {
       this.checkPath(this.props.location.pathname);
    }

    checkPath = (path) => {
        if (path === '/home') {
            this.setState({selectedTab: 'blueTab'})
        }
        if (path === '/offer') {
            this.setState({selectedTab: 'redTab'})
        }
        if (path === '/phone') {
            this.setState({selectedTab: 'greenTab'})
        }
        if (path === '/freedesign') {
            this.setState({selectedTab: 'yellowTab'})
        }
        if (path === '/contact') {
            this.setState({selectedTab: 'pinkTab'})
        }
    };

    render() {
        return (
            <div  style={{position:'fixed',bottom:0,left:0,right:0,background:'#111',zIndex:100}}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#FFF"
                    barTintColor="#111"
                    hidden={this.state.hidden}
                    noRenderContent={false}
                    height="60px"
                >
                    <TabBar.Item
                        title="首页"
                        key="Life"
                        icon={<div style={{
                            width: '.64rem',
                            height: '.64rem',
                            backgroundImage: 'url(/assets/img/footer.png)',
                            backgroundRepeat: "no-repeat",
                            backgroundSize:'3.2rem 1.28rem',
                            backgroundPosition: "0 0"
                        }}

                        />
                        }
                        selectedIcon={<div style={{
                            width: '.64rem',
                            height: '.64rem',
                            backgroundImage: 'url(/assets/img/footer.png)',
                            backgroundRepeat: "no-repeat",
                            backgroundSize:'3.2rem 1.28rem',
                            backgroundPosition: "0 -.64rem"
                        }
                        }
                        />
                        }
                        selected={this.state.selectedTab === 'blueTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                            this.props.history.push('/home')
                        }}
                        data-seed="logId"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '32px',
                                height: '32px',
                                backgroundImage: 'url(/assets/img/footer.png)',
                                backgroundRepeat: "no-repeat",
                                backgroundSize:'3.2rem 1.28rem',
                                backgroundPosition: "-42px 0"}}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '32px',
                                height: '32px',
                                backgroundImage: 'url(/assets/img/footer.png)',
                                backgroundRepeat: "no-repeat",
                                backgroundSize:'3.2rem 1.28rem',
                                backgroundPosition: "-42px -40px"
                            }}
                            />
                        }
                        title="免费报价"
                        key="Koubei"
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                            this.props.history.push('/offer')
                        }}
                        data-seed="logId1"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '32px',
                                height: '32px',
                                backgroundImage: 'url(/assets/img/footer.png)',
                                backgroundRepeat: "no-repeat",
                                backgroundSize:'3.2rem 1.28rem',
                                backgroundPosition: "-81px 0"
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '32px',
                                height: '32px',
                                backgroundImage: 'url(/assets/img/footer.png)',
                                backgroundRepeat: "no-repeat",
                                backgroundSize:'3.2rem 1.28rem',
                                backgroundPosition: "-81px -40px"}}
                            />
                        }
                        title="电话"
                        key="Friend"

                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                            this.props.history.push('/phone')
                        }}

                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={ <div style={{
                            width: '32px',
                            height: '32px',
                            backgroundImage: 'url(/assets/img/footer.png)',
                            backgroundRepeat: "no-repeat",
                            backgroundSize:'3.2rem 1.28rem',
                            backgroundPosition: "-116px 0"
                        }}
                        />}
                        selectedIcon={  <div style={{
                            width: '32px',
                            height: '32px',
                            backgroundImage: 'url(/assets/img/footer.png)',
                            backgroundRepeat: "no-repeat",
                            backgroundSize:'3.2rem 1.28rem',
                            backgroundPosition: "-116px -40px"}}
                            /> }
                        title="免费设计"
                        key="my"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                            this.props.history.push('/freedesign')
                        }}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={ <div style={{
                            width: '32px',
                            height: '32px',
                            backgroundImage: 'url(/assets/img/footer.png)',
                            backgroundRepeat: "no-repeat",
                            backgroundSize:'3.2rem 1.28rem',
                            backgroundPosition: "-154px 0"
                        }}
                        />}
                        selectedIcon={  <div style={{
                            width: '32px',
                            height: '32px',
                            backgroundImage: 'url(/assets/img/footer.png)',
                            backgroundRepeat: "no-repeat",
                            backgroundSize:'3.2rem 1.28rem',
                            backgroundPosition: "-154px -40px"}}
                        /> }
                        title="联系"
                        key="my"
                        selected={this.state.selectedTab === 'pinkTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'pinkTab',
                            });
                            this.props.history.push('/contact')
                        }}
                    >
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}

export default Footer;