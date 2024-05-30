
import { ADD_TODO , REMOVE_TODO , DONE_TODO , EDIT_TODO} from "./actionTypes"

export const addTOdo =(id , todo ) => {
    let task = {
        id : id , 
        task : todo  
    } 
    return {
        type : ADD_TODO , 
        payload : task ,
        isDone: false 

    }
}
export const removeTodo  =(id) => {
      return {
        type : REMOVE_TODO ,
        payload : id  
      }
}
export const doneTodo = (id) => {
    return {
        type: DONE_TODO,
        payload: id
    }}


export const editTodo =(id , newTodo) => {
    return {
        type : EDIT_TODO ,
        payload : {id , newTodo}
    }
}