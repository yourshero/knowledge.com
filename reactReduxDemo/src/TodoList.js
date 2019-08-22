import React, { Component } from 'react';
import {connect} from 'react-redux'

class TodoList extends Component {
    render() { 
      let {inputValue,inputChange,list,clickButton} = this.props
        return (
            <div>
                <div>
                    <input defaultValue={inputValue} onChange={inputChange} />
                    <button onClick={clickButton}>提交</button>
                </div>
                <ul>
                  {
                    list.map((item,index)=>
                        <li key={index}>{item}</li>
                    )
                  }
                </ul>
            </div>
            );
    }
}

const stateToProps = (state)=>{
  console.log(state)//这里捕获到store 仓库
    return {
        inputValue : state.inputValue,
        list:state.list
    }
}
const dispatchToProps = (dispatch)=>{
  return {
    inputChange(e){
      let action = {
        type:'change_input',
        value:e.target.value
    }
    dispatch(action)
    },
    clickButton(){
      let action = {type:'add_item'}
      dispatch(action)
    }
  }
}
 
export default connect(stateToProps,dispatchToProps)(TodoList);