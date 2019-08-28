import React, { Component } from 'react'
import {Row,Col} from 'antd'
import './FooterContainer.less'

class FooterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="FooterContainer">
                <div className="common-container"> 
                 <Row type="flex" justify="space-between" className="list-info" style={{marginBottom:"60px"}}>
                    <Col span={8}>
                        <img src={require('pages/../images/footer-logo.png')} alt="" className="footer-logo" />
                        <p>幕思城</p>
                        <p>
                           我们是全力帮助电商领域普通人创造不普通事业的使命团队
                        </p>
                    </Col>
                    <Col span={5}>
                        <strong>人才招聘</strong>
                        <ul>
                            <li>填写意向</li>
                            <li>投递简历</li>
                            <li>咨询了解</li>
                        </ul>
                    </Col>
                    <Col span={5}>
                        <strong>人才招聘</strong>
                        <ul>
                            <li>广告业务</li>
                            <li>软件业务</li>
                            <li>流量业务</li>
                        </ul>
                    </Col>
                    <Col span={6}>
                        <strong>联系方式</strong>
                        <ul>
                            <li>
                                工作时间：周一至周五 10:00 至 19:00 
                            </li>
                            <li>
                                工作地点：四川·成都       
                            </li>
                            <li>
                                联系电话：028-62083385 
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row style={{marginBottom:"30px"}}>
                    <Col span={24} style={{marginBottom:"30px"}}>友情链接</Col>
                    <Col span={2} style={{marginBottom:"15px"}}><a href="#" style={{color:"#B3B3B3"}}>链接名称</a></Col>
                    <Col span={2} style={{marginBottom:"15px"}}><a href="#" style={{color:"#B3B3B3"}}>链接名称</a></Col>
                    <Col span={2} style={{marginBottom:"15px"}}><a href="#" style={{color:"#B3B3B3"}}>链接名称</a></Col>
                    <Col span={2} style={{marginBottom:"15px"}}><a href="#" style={{color:"#B3B3B3"}}>链接名称</a></Col>
                    <Col span={2} style={{marginBottom:"15px"}}><a href="#" style={{color:"#B3B3B3"}}>链接名称</a></Col>
                    <Col span={2} style={{marginBottom:"15px"}}><a href="#" style={{color:"#B3B3B3"}}>链接名称</a></Col>
                    <Col span={2} style={{marginBottom:"15px"}}><a href="#" style={{color:"#B3B3B3"}}>链接名称</a></Col>
                    <Col span={2} style={{marginBottom:"15px"}}><a href="#" style={{color:"#B3B3B3"}}>链接名称</a></Col>
                    <Col span={2} style={{marginBottom:"15px"}}><a href="#" style={{color:"#B3B3B3"}}>链接名称</a></Col>
                    <Col span={2} style={{marginBottom:"15px"}}><a href="#" style={{color:"#B3B3B3"}}>链接名称</a></Col>
                    <Col span={2} style={{marginBottom:"15px"}}><a href="#" style={{color:"#B3B3B3"}}>链接名称</a></Col>
                    <Col span={2} style={{marginBottom:"15px"}}><a href="#" style={{color:"#B3B3B3"}}>链接名称</a></Col>
                    <Col span={2} style={{marginBottom:"15px"}}><a href="#" style={{color:"#B3B3B3"}}>链接名称</a></Col>
                    <Col span={2} style={{marginBottom:"15px"}}><a href="#" style={{color:"#B3B3B3"}}>链接名称</a></Col>
                </Row>
                
                </div>
                <div style={{borderTop:'1px solid #676767',height:'50px'}}>
                    <div className="common-container">
                        <Row type="flex" justify="space-between" align="middle" style={{height:'50px'}}>
                            <Col span={8}>Copyright©2012-2018  幕思城 musicheng.com 版权所有</Col>
                            <Col span={2} style={{display:'flex'}}>
                            <img src={require('pages/../images/wb-icon.png')} alt="" style={{marginRight:"15px"}}/>
                            <img src={require('pages/../images/wx-icon.png')} alt="" />
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default FooterContainer;