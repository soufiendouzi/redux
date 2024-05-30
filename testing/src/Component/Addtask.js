import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { addTOdo , removeTodo } from '../Redux/actions';
import { useState } from 'react';

const Addtask = () => {

    const [change, setChange] = useState (0)
    const [todo, setTodo] = useState("")
    const todos = useSelector ((state)=> state.todos)
    const dispatch = useDispatch();
  
    // handel add task 
    const todohandler =() => {
      if (todo !== "") {
        dispatch(addTOdo(change , todo));
        setChange (change +1) ;
        setTodo("") ;
      }
      else {
        alert ("Can't Add Empty Task  ")
      }
        
    }
  
  return (
    
          <div >
            <input
              onSubmit={todohandler}

            className='input'
              type='text'
              value={todo}
              onChange={(e)=>setTodo(e.target.value)} 
              placeholder='Enter item '/>
           
        <button onClick={todohandler} >
ADD TODO 
        </button>

     {/* delete task  */}

       <div className='cont'>
  <ul>
    {todos?.map((todo) => (
      <li key={todo.id}>
        <p>{todo.task}</p>
        <button onClick={() => dispatch(removeTodo(todo.id))}>
        REMOVE

        </button>
      </li>
    ))}
  </ul>
</div>

</div>
      
    
  )
}

export default Addtask
