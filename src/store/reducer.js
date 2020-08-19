//reducer来改,获取state,必须要有返回值
import * as types from './types';
export default (state,{type,payload}) => {
    // let {type,payload} = action;
    // console.log('reducer',state,type,payload);
    switch (type) {
        case types.VIEW_HEADER:
            return {...state,showHeader:payload};
        case types.VIEW_FOOTER:
            return {...state,showFooter:payload};
        case types.VIEW_LOADING:
            return {...state,showLoading:payload};
        //轮播图的数据
        case types.UPDATE_BANNER:
            return {...state,banner:payload};
        //八个宫格数据
        case types.UPDATE_EIGHT:
            return {...state,eight:payload};
        //四个宫格数据
        case types.UPDATE_FOUR:
            return {...state,four:payload};
        //效果图数据
        case types.UPDATE_STYLEDATA:
            return {...state,styleData:payload};
        //设计团队数据
        case types.UPDATE_TEAM:
            return {...state,teamData:payload};
        //设计装修效果图数据
        case types.GET_DESIGNDATA:
            return {...state,listData:payload};
        //设计装修效果图详情数据
        case types.DESIGNDATAIL:
            return {...state,designDetail:payload};

        //设计装修效果图详情数据
        case types.TEST:
            return {...state,test:payload};



        case types.UPDATE_HOME:
            return {...state,home:payload};
        case types.UPDATE_DETAIL:
            console.log(payload);
            return {...state,detail:payload};
        case types.UPDATE_GOODS:
            console.log(payload);
            return {...state,goods:payload};
        case types.CHECK_USER:
            console.log(payload);
            return {...state,user:payload};
        // case "ADD_ITEM" :
        //     //处理同步业务,一定要返回copy 并更新后的state
        //     // return {...state,list:state.list.concat(payload)};
        //
        //     /* let newState = {...state};
        //      newState.list.push(payload);
        //      return newState;
        //    */
        //     // return Object.assign(合并后的对象，老对象,新对象) 返回合并后的对象
        //     return Object.assign({},state,{list:[...state.list,payload]});
        //
        // case 'VIEW_LOADING':
        //     return {...state,showLoading:payload};

        default:
            return state;
    }
}