import React from 'react';
import {Link} from "react-router-dom";
import queryString from 'query-string'
import {Card,Badge} from "antd-mobile";

class Cell extends React.Component{
    render() {
        let {dataName} = this.props;
        return (
          <div>
              {
                  this.props.listData && this.props.listData.map( (value,index)=>(
                      <Link to={{pathname:'/designdetail/'+ value._id,search:queryString.stringify({dataName})}} key={value._id}>
                          <Card style={{margin:"15px 0",background:'#f3f3f3'}}>
                              <Badge text={'推荐'} corner>
                                  <Card.Header
                                      title={value.auth}
                                      // thumb={React.server.baseUrl + value.auth_icon}
                                  />
                              </Badge>
                              <Card.Body>
                                  <div>
                                      <p>{value.title}</p>
                                      <img src={React.server.baseUrl + value.img[0]} alt="" style={{width:'100%',
                                          height:'3.5rem'
                                      }}/>
                                  </div>
                              </Card.Body>
                              <Card.Footer content={<span><i>1111</i><i>111</i></span>} extra={<div>{value.time}</div>} />
                          </Card>
                      </Link>
                  ))
              }
          </div>
        )

}}

export default Cell;