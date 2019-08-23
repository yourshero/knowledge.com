import React, { Component } from 'react';
import HeaderLogin from '../HeaderLogin/HeaderLogin'
import HeaderCarousel from '../HeaderCarousel/HeaderCarousel'
import './HeaderTop.less'
import { Row, Col } from 'antd'

class HeaderTop extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='HeaderTop'>
                <Row type="flex" justify="space-between" align="middle" className="common-container">
                    <Col span={8}><HeaderCarousel /></Col>
                    <Col span={8}><HeaderLogin /></Col>
                </Row>
            </div>
         );
    }
}
 
export default HeaderTop;