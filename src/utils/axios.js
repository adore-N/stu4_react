import React from 'react';
import axios from 'axios';
// import pubsub from 'pubsub-js';
import store from "../store/store";
axios.defaults.withCredentials = true;  //整体携带跨源凭证

//拦截器
axios.interceptors.request.use(function (config) {
    // console.log('拦截器 request before');
    //添加公共请求头  token key：value
    store.dispatch({type: 'VIEW_LOADING', payload: true});

    // pubsub.publish('VIEW_LOADING',true);

    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    // console.log('拦截器 response before')
    store.dispatch({type:'VIEW_LOADING',payload:false});

    // pubsub.publish('VIEW_LOADING',false);
    // pubsub.publish('VIEW_GIT',false);
    return response;
}, function (error) {
    return Promise.reject(error);
});

React.axios=axios;
window.axios=axios;

export default axios;
