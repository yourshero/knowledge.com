import React, { Component, Fragment } from 'react';
import { Row, Col ,Icon,Input } from 'antd'
import './HeaderSearch.less'
const { Search } = Input;
class HeaderSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="HeaderSearch">
                <Row className="common-container" type="flex" justify="space-between">
                    <Col span={10}><img src={require('pages/../images/logo.png')} alt="" className="logo" /></Col>
                    <Col span={10} style={{display:'flex',alignItems:'center',justifyContent:'flex-end'}}><Search
                        placeholder="请输入需要搜索的关键词"
                        onSearch={this.onSearchFun}
                        style={{ width: 394,height:42}}
                        /></Col>
                </Row>
            </div>
         );
    }
     onSearchFun = (e)=>{
        console.log(e);
    }
}
 
export default HeaderSearch;