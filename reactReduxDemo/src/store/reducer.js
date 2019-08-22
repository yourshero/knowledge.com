
// import {CHANGE_INPUT_VAL,ADD_ITEM,DEL_ITEM,GET_LIST} from './ActionTypes'

// const defaulState = {
//     inputValue : 'Write Something',
//     list:[
//         '早上4点起床，锻炼身体',
//         '中午下班游泳一小时'
//     ]
// }
// export default(state = defaulState,action)=>{
//         console.log(state,action)
//         if(action.type === CHANGE_INPUT_VAL){
//             let newState = JSON.parse(JSON.stringify(state))
//             newState.inputValue = action.value
//             return newState
//         }
//         if(action.type === ADD_ITEM){
//             let newState = JSON.parse(JSON.stringify(state))
//             newState.list.push(newState.inputValue)
//             newState.inputValue = ''
//             return newState
//         }
//         if(action.type === DEL_ITEM){
//             let newState = JSON.parse(JSON.stringify(state))
//             newState.list.splice(action.index,1)
//             return newState
//         }
//         if(action.type === GET_LIST){
//             let newState = JSON.parse(JSON.stringify(state))
//             newState.list = action.data.data.list
//             return newState
//         }
//         return state
// }


const defalutState = {
    inputValue : 'jspang',
    list :[]
}

export default (state = defalutState,action) =>{
    if(action.type === 'change_input'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === 'add_item'){
        let newState = JSON.parse(JSON.stringify(state))
        console.log(newState.inputValue)
        newState.list.push(newState.inputValue)
        return newState
    }
    return state
}