import React from 'react';

//解构路由参数
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Home from "../pages/Home";
import Phone from "../pages/Phone";
import Offer from "../pages/Offer";
import FreeDesign from "../pages/FreeDesign";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import Header from './Header'
import Footer from './Footer'
import DesignList from "../pages/DesignList";
import DesignDetail from "../pages/DesignDetail";
import DesignTeam from "../pages/DesignTeam";
import TeamDetail from "../pages/TeamDetail";

class App extends React.Component{

    componentDidMount() {

    }

    render() {
        return (
            <div className='app' style={{background:"#e2e4e3"}}>
                {/*排他性路由,只能匹配一条*/}
                    {<Header {...this.props}/>}

                <Switch>
                    <Route path={'/home'} component={Home}/>
                    <Route path={'/offer'} component={Offer}/>
                    <Route path={'/phone'} component={Phone}/>
                    <Route path={'/freedesign'} component={FreeDesign}/>
                    <Route path={'/contact'} component={Contact}/>
                    <Route path={'/designlist'} component={DesignList}/>
                    <Route path={'/designdetail/:id'} component={DesignDetail}/>
                    <Route path={'/designteam'} component={DesignTeam}/>
                    <Route path={'/teamdetail/:id'} component={TeamDetail}/>
                    <Redirect exact from='/' to='/home'/>
                    <Route component={ErrorPage}/>
                </Switch>
                {<Footer  {...this.props}/>}
            </div>
        )
    }
}

//withRoute(App):可以使App组件有路由的上下文数据(三大对象)
export default withRouter(App);
