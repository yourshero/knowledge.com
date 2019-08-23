import React from 'react'
import ReactDOM from 'react-dom'
import { Layout } from 'antd'
import HeaderContainer from 'components/HeaderContainer/HeaderContainer'
import FooterContainer from 'components/FooterContainer/FooterContainer'
import HomeContainer from 'components/HomeContainer/HomeContainer'
import './index.less'
import './styles/reset.less'
import './styles/common.less'
const { Header, Footer, Content } = Layout;

ReactDOM.render(
        <Layout>
        <Header><HeaderContainer /></Header>
        <Content><HomeContainer /></Content>
        <Footer><FooterContainer /></Footer>
        </Layout>,document.getElementById('root'))
