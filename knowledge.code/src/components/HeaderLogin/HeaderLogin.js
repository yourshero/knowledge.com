import React, { Component} from 'react'
import { Row, Col ,Icon,Button } from 'antd'
import './HeaderLogin.less'

class HeaderLogin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            privoce:'四川',
            city:'成都'
         }
    }
    render() { 
        return ( 
            <div className="HeaderLogin">
                <Row>
                    <Col span={8}><Icon type="environment" />{this.state.privoce}.{this.state.city}</Col>
                    <Col span={8}><Icon type="phone" />028-62083385</Col>
                    <Col span={8} className='login-box'><span>[登录]</span>&nbsp;<span>[注册]</span></Col>
                </Row>
            </div>
         );
    }
}
 
export default HeaderLogin;