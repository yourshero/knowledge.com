import React from 'react';
import { Button } from 'antd';
    // console.log(props)
    const TodoListUi = (props)=>{
        let {changeInputValue,clickAddBtn,clickDelBtn,inputValue,list} = props
        return ( 
            <div className="App">
                <Button type="primary" onClick={clickAddBtn}>Button</Button>
                <section>
                <input placeholder={inputValue} onChange={changeInputValue}/>
                </section>
                <ul>
                {
                    list.map((item,index)=>
                    <li key={index} onClick = {()=>clickDelBtn(index)}><h1>{item}</h1></li>
                    )
                }
                </ul>
            </div>
         );
    }
  
 
export default TodoListUi;