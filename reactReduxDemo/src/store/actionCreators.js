import {CHANGE_INPUT_VAL,ADD_ITEM,DEL_ITEM,GET_LIST} from './ActionTypes'
import axios from 'axios'

export const changeInputAction = (value)=>({
    type:CHANGE_INPUT_VAL,
    value:value
})
export const clickAddItem = ()=>({
    type:ADD_ITEM
})
export const clickDelItem = (index)=>({
    type:DEL_ITEM,
    index
})
export const getListAction = (data)=>({
    type:GET_LIST,
    data
})
//获取接口列表
export const getTodoList = ()=>{
    return (dispatch)=>{
        axios.get('https://www.easy-mock.com/mock/5928eb3491470c0ac1fe660a/example/reactDemoApi')
        .then((res)=>{
          const data = res.data
          const action = getListAction(data)
          dispatch(action)
        })
    }
}