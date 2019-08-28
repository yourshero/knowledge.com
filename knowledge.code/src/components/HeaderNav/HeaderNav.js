import React, { Component } from 'react';
import HeaderLogin from '../HeaderLogin/HeaderLogin'
import HeaderCarousel from '../HeaderCarousel/HeaderCarousel'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './HeaderNav.less'
import { Dropdown,Menu,Icon  } from 'antd'
import Home from 'pages/home/home'
class HeaderNav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            clickIndex:0
         };
    }
    menuF = (menuList)=>{
        return <Menu>{
            menuList.map((item,index) =>{
                    return(
                        <Menu.Item key={index}>
                                <a href={item.url}>
                                    <span>{item.tag}</span>
                                </a>
                        </Menu.Item>
                        )
            })
                }
            </Menu>
    }
    render() { 
        const navsList = [
            {
                name:'网站首页',
                menuUrl:'/',
                menu:[]
            },
            {
                name:'盈利服务',
                menuUrl:'/services/',
                menu:[
                    {
                        tag:'1st menu item',
                        url:'www.1.com',
                    },
                    {
                        tag:'2st menu item',
                        url:'www.2.com',
                    },
                    {
                        tag:'3st menu item',
                        url:'www.3.com',
                    },
                ]
            },
            {
                name:'电商教程',
                menuUrl:'/ecWiki/',
                menu:[
                    {
                        tag:'1st menu item',
                        url:'www.1.com',
                    },
                    {
                        tag:'2st menu item',
                        url:'www.2.com',
                    },
                    {
                        tag:'3st menu item',
                        url:'www.3.com',
                    },
                ]
            },
            {
                name:'电商百科',
                menuUrl:'/ecCourse/',
                menu:[
                    {
                        tag:'1st menu item',
                        url:'www.1.com',
                    },
                    {
                        tag:'2st menu item',
                        url:'www.2.com',
                    },
                    {
                        tag:'3st menu item',
                        url:'www.3.com',
                    },
                ]
            },
            {
                name:'电商问答',
                menuUrl:'/ecAsk/',
                menu:[
                    {
                        tag:'1st menu item',
                        url:'www.1.com',
                    },
                    {
                        tag:'2st menu item',
                        url:'www.2.com',
                    },
                    {
                        tag:'3st menu item',
                        url:'www.3.com',
                    },
                ]
            },
            {
                name:'电商工具',
                menuUrl:'/ecTool',
                menu:[
                    {
                        tag:'1st menu item',
                        url:'www.1.com',
                    },
                    {
                        tag:'2st menu item',
                        url:'www.2.com',
                    },
                    {
                        tag:'3st menu item',
                        url:'www.3.com',
                    },
                ]
            },
            {
                name:'电商行情',
                menuUrl:'/ecMarket/',
                menu:[
                    {
                        tag:'1st menu item',
                        url:'www.1.com',
                    },
                    {
                        tag:'2st menu item',
                        url:'www.2.com',
                    },
                    {
                        tag:'3st menu item',
                        url:'www.3.com',
                    },
                ]
            }
        ]
        return ( 
            <div className='HeaderNav'>
                <div className="common-container">
                        <ul className="navs">
                        {/* <li>
                            <Link to="/">
                                网站首页
                            </Link>
                        </li> */}
                        {
                            navsList.map((item,index)=>
                                <li key={index} className={index===this.state.clickIndex?'nav-active':''} onClick={()=>{this.clickNavBtn(index)}}>
                                    <Dropdown overlay={()=>this.menuF(item.menu)}
                                    >
                                        <Link className="ant-dropdown-link" to={item.menuUrl} style={{color:(item.name=='盈利服务')?'#FCFF00':'#fff'}}>
                                        {item.name}
                                        <Icon type="down" style={{display:(item.menu.length>0)?"inline-block":"none"}} />
                                        </Link>
                                    </Dropdown> 
                                </li>  
                            )
                        }
                    </ul>
                </div>
            </div>
         );
    }
    clickNavBtn = (index)=>{
        this.setState({
            clickIndex:index
        })
    }

    
}
 
export default HeaderNav;