import React, { Component, Fragment } from 'react';
import './loginSuc.less'
import {connect} from 'react-redux' 
import { Button } from 'antd'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    leaveClickBtn = (e)=>{
        localStorage.removeItem('token');
    }
    render() { 
        return ( 
            <div className="login-suc">
                <h1>
                    {this.props.title}
                </h1>
                <Button onClick={this.leaveClickBtn}>退出</Button>
            </div>
         );
    }
}
const stateToProps = (state)=>{
    return {
        title : state.title
    }
}
export default connect(stateToProps,null)(Home);