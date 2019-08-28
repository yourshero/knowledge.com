import React, { Component } from 'react';
import Login from './login/login.js'
import LoginSuc from './loginSuc/loginSuc.js'
import './index.less'
class HomeBannerIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token:'' 
         }
         
    }
    componentDidMount(){
        let getToken = localStorage.getItem("token")
        if(getToken){
            this.setState({
                token:getToken
            })
        }
    }
    render() { 
        let {a,b} = this.state
        return ( 
        <div className="HomeBannerIndex">
            <div className="common-container" style={{backgroundColor:'gray',height:400,position:'relative'}}>
                {
                    this.state.token?<LoginSuc />:<Login />
                }
            </div>
        </div>
         );
    }
}
 
export default HomeBannerIndex;