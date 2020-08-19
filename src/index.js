import React from 'react';
import ReactDOM from 'react-dom';

//引入公共样式
import './library/font'
import './assets/css/base.css';

React.server = require('./config/server');


import App from './layouts/App';
//路由引入
import {BrowserRouter,Route} from "react-router-dom";
//引入状态管理
import store from "./store/store";
import {Provider} from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            {/*/这种写法可以让app上面带有路由的上下文*/}
            <Route component={App} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

