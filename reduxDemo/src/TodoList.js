import React, { Component } from 'react';
import store from './store';
import {changeInputAction,clickAddItem,clickDelItem,getTodoList} from './store/actionCreators'
import TodoListUi from './TodoListUi'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    this.storeChange = this.storeChange.bind(this)
    // this.clickAddBtn = this.clickAddBtn.bind(this)
    store.subscribe(this.storeChange)
  }
  componentDidMount(){
    const action = getTodoList()
    store.dispatch(action)
  }
  render() { 
    return (
      <TodoListUi 
       inputValue={this.state.inputValue}
       list={this.state.list}
       changeInputValue={this.changeInputValue}
       clickDelBtn={this.clickDelBtn}
       clickAddBtn={this.clickAddBtn}
      />
    );
  }
  changeInputValue = (e) =>{
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }
  clickDelBtn = (index)=>{
    const action = clickDelItem(index)
    store.dispatch(action)
  }
  clickAddBtn = ()=>{
    const action = clickAddItem()
    store.dispatch(action)
  }
  storeChange(){
    this.setState(store.getState())
  }
}
export default TodoList;
