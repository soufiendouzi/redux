import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {   doneTodo } from '../Redux/actions';

const Task = () => {
    const todos = useSelector ((state)=> state.todos)
    const dispatch = useDispatch () ; 

  return (

    <div className='cont '>

                <ul>
                    {todos.map(todo => (
                        <li key={todo.id}>
                            <span style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>
                                {todo.description}
                            </span>
                            <button onClick={() => dispatch (doneTodo(todo.id))}>
                                {todo.isDone ? 'UnDone' : 'Done'}
                            </button>
                            <button  type='text'> EDIT  </button>

                        </li>
                    ))}
                </ul>
            </div>
  )
}

export default Task
