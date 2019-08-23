import React, { Component, Fragment } from 'react'
import {Row,Col} from 'antd'
import './FooterContainer.less'

class FooterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="FooterContainer common-container">
                 <Row type="flex" justify="space-between" align="middle">
                    <Col span={8}>1</Col>
                    <Col span={5}>2</Col>
                    <Col span={5}>3</Col>
                    <Col span={6}>4</Col>
                </Row>
                <Row>
                    <Col span={24}>友情链接</Col>
                    <Col span={2}>链接名称</Col>
                    <Col span={2}>链接名称</Col>
                    <Col span={2}>链接名称</Col>
                    <Col span={2}>链接名称</Col>
                    <Col span={2}>链接名称</Col>
                    <Col span={2}>链接名称</Col>
                    <Col span={2}>链接名称</Col>
                    <Col span={2}>链接名称</Col>
                    <Col span={2}>链接名称</Col>
                    <Col span={2}>链接名称</Col>
                    <Col span={2}>链接名称</Col>
                    <Col span={2}>链接名称</Col>
                    <Col span={2}>链接名称</Col>
                    <Col span={2}>链接名称</Col>
                </Row>
                <Row type="flex" justify="space-between" align="middle">
                <Col span={8}>Copyright©2012-2018  幕思城 musicheng.com 版权所有</Col>
                <Col span={2}>链接名称</Col>
                </Row>
            </div>
         );
    }
}
 
export default FooterContainer;