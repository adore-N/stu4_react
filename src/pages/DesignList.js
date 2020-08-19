import React from 'react';
import Cell from "../components/Cell";
import {connect} from "react-redux";
import {getRealData} from "../store/actions";
import {GET_DESIGNDATA} from "../store/types";
class DesignList extends React.Component{
    render() {
        return (
            <div>
                <div>
                    <img style={{height:'4rem',width:'100%'}}  src="https://img.zcool.cn/community/01e8095dc10cb4a8012163ba3da23b.jpg@260w_195h_1c_1e_1o_100sh.jpg" alt=""/>
                </div>
                <Cell {...this.props} dataName={'design'}/>
            </div>
        )
    }

    componentDidMount() {
        this.props.getListData();
    }
}

const  mapStateToProps = state => ({
   listData: state.listData
});

const mapDispatchToProps = (dispatch,ownProps) => ({
    getListData: () => dispatch(getRealData(
        {
            url:'/design/design',
            _limit: 5,
            type: GET_DESIGNDATA
        }
    ))
});

const Container = connect(mapStateToProps,mapDispatchToProps)(DesignList);
export default Container;

