import React from 'react';
import TeamCell from "../components/TeamCell";
import {getRealData} from "../store/actions";
import {GET_DESIGNDATA} from "../store/types";
import {connect} from "react-redux";

class DesignTeam extends React.Component{
    render() {
        return (
            <div  style={{marginBottom:60}}>
                <div style={{marginBottom:30}}>
                    <img style={{height:'4rem',width:'100%'}}  src="https://img.zcool.cn/community/01e8095dc10cb4a8012163ba3da23b.jpg@260w_195h_1c_1e_1o_100sh.jpg" alt=""/>
                </div>
                <TeamCell {...this.props}  dataName={'team'}/>
            </div>
        )
    }
    componentDidMount() {
        this.props.getListData();
    }
}

const  mapStateToProps = state => ({
    listData: state.listData,
});

const mapDispatchToProps = (dispatch,ownProps) => ({
    getListData: () => dispatch(getRealData(
        {
            url:'/design/designer',
            _limit: 10,
            type: GET_DESIGNDATA
        }
    ))
});

const Container = connect(mapStateToProps,mapDispatchToProps)(DesignTeam);
export default Container;