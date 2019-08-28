import React from 'react'
import ReactDOM from 'react-dom'
import { Layout } from 'antd'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HeaderContainer from 'components/HeaderContainer/HeaderContainer'
import FooterContainer from 'components/FooterContainer/FooterContainer'
import HomeContainer from 'components/HomeContainer/HomeContainer'
import './index.less'
import './styles/reset.less'
import './styles/common.less'

import Home from 'pages/home/home'

import EcWikiIndex from 'pages/ecWiki/index'
import EcCourseIndex from 'pages/ecCourse/index'
import EcAskIndex from 'pages/ecAsk/index'
import EcToolIndex from 'pages/ecTool/index'
import EcMarketIndex from 'pages/ecMarket/index'

const { Header, Footer, Content } = Layout;

ReactDOM.render(
        <Router>
        <Layout>
        <Header><HeaderContainer /></Header>
        <Content>
                        <Route path="/" exact component={Home} />
                        <Route path="/ecWiki/" exact component={EcWikiIndex} />  
                        <Route path="/ecCourse/" exact component={EcCourseIndex} />  
                        <Route path="/ecAsk/" exact component={EcAskIndex} />  
                        <Route path="/ecTool/" exact component={EcToolIndex} />  
                        <Route path="/ecMarket/" exact component={EcMarketIndex} />  
        </Content>
        <Footer><FooterContainer /></Footer>
        </Layout>
        </Router>
        ,document.getElementById('root'))
