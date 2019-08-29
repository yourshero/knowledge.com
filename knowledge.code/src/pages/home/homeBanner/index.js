import React, { Component } from 'react';
import Login from './login/login.js'
import LoginSuc from './loginSuc/loginSuc.js'
import utils from '@/utils/utils.js'
import './index.less'
class HomeBannerIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token:'' 
         }
    }
    componentDidMount(){
        console.log(utils.urlParam('rsv_idx','https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1234&rsv_idx=133444&tn=baidu&wd=yarn%20eject&oq=yarneject&rsv_pq=97a8019400055964&rsv_t=05f6Ull4wIDv7HT0i2d3vD0aLrO2HZp1VdgNFQ6nH1Ju9WInLx4AjqXrfJk&rqlang=cn&rsv_enter=0&rsv_dl=tb&inputT=474&rsv_sug3=36&rsv_sug1=20&rsv_sug7=000&rsv_sug2=0&rsv_sug4=703&rsv_sug=1'))
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