import axios from "axios";
// import {VIEW_LOADING} from "./types";

export const getDate = ({url,id=null,type,_limit=10,_page=1}) => {
    return (dispatch,getState)=>{
        // dispatch({type:VIEW_LOADING,payload:true});
        // console.log(url,type,id)
        return axios({
            url: id ? url + '/' + id : url,
            params:{
                _limit,_page
            }
        }).then(
            res => {
                // console.log(1111111111111111,res.data.data);
                // dispatch({type: VIEW_LOADING, payload: false});
                dispatch({type: type, payload: res.data.data});
            }
        )
    }
};

export const getRealData = ({url,id=null,type,_limit=10,_page=1}) => {
    return (dispatch,getState)=>{
        // dispatch({type:VIEW_LOADING,payload:true});
        // console.log(url,type,id)
        return axios({
            url: id ? url + '/' + id : url,
            params:{
                _limit,_page
            }
        }).then(
            res => {
                // console.log(res.data);
                // dispatch({type: VIEW_LOADING, payload: false});
                dispatch({type: type, payload: res.data});
            }
        )
    }
};
export const getRealDataDetail = ({url,id=null,type,_limit=10,_page=1}) => {
    return (dispatch,getState)=>{
        // dispatch({type:VIEW_LOADING,payload:true});
        // console.log(url,type,id)
        return axios({
            url: id ? url + '/' + id : url,
            params:{
                _limit,_page
            }
        }).then(
            res => {
                console.log(res.data.data);
                // dispatch({type: VIEW_LOADING, payload: false});
                dispatch({type: type, payload: res.data.data});
            }
        )
    }
};

export const authUser = ({url,save=false,method='get',type,params={},data={},receipt=true}) => {
    return (dispatch,getState)=>{
        // dispatch({type:VIEW_LOADING,payload:true});
        console.log(data,params);
        return axios({
            url: url,
            method,
            params:{
                ...params,
                save
            },
            data:{
                ...data,
                save
            }
        }).then(
            res => {
                dispatch({type: type, payload: res.data});
                if(receipt){
                    return res.data;
                }
            }
        )
    }
};

