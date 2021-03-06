import React, { Component } from 'react';
import { Form,Input, Tooltip, Icon,Button  } from 'antd';
import LoginSuc from '../loginSuc/loginSuc.js'
import axios from 'axios'
import './login.less'
import store from '@/store'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
    }
  //   getBannerList=async ()=>{
  //     console.log(111111111);
  //     let list = await API.getBannerList()
  //     console.log(list)
  // }
    saveLocalStorageToken = val =>{
      console.log(val)
       localStorage.setItem("token",val);
    }
    getLocalStorageToken = () =>{
      let tokenVal = localStorage.setItem("token");
      if(tokenVal){
        this.setState({
          isLogin:true
        })
      }
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            axios.get('https://www.easy-mock.com/mock/5928eb3491470c0ac1fe660a/example/login',
            {
              params:{
                user:values.username,
                pwd:values.username
              }
            })
            .then(res=>{
              console.log(res)
              this.saveLocalStorageToken(res.data.token)
              this.setState({
                isLogin:true
              })
            })
          }
        });
      };
      componentDidMount(){
        if ( typeof(localStorage.Items) == "token" ){
          this.getLocalStorageToken()
        }
      }
    render() { 
        const { getFieldDecorator } = this.props.form;
        return ( 
                this.state.isLogin?<LoginSuc />:<div className="login">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <h1>欢迎登录幕思城</h1>
                    <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                        placeholder="用户名"
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    />,
                            )}
                    </Form.Item>
                    <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input.Password 
                        placeholder="密码"
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    />,
              )}
            </Form.Item>
                    <div className="submit-box">
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{backgroundColor:'#E8322D',color:'#fff'}}>登录</Button>
                        <Button type="primary" style={{backgroundColor:'#fff',color:'#D02020'}}>注册</Button>
                    </div>
                    <p style={{marginTop:'10px',marginBottom:'26px',textAlign:'center'}}>
                        <a href='#' style={{color:'#fff'}}>忘记密码？</a>
                    </p>
                    <div className="wx-login">
                        <Button type="primary" shape='round' block>
                            <Icon type="wechat" />
                            微信登录
                        </Button>
                    </div>
                </Form>
            </div>
         );
    }
}
 
export default Form.create({ name: 'normal_login' })(Login);