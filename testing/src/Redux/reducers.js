import { ADD_TODO , REMOVE_TODO , DONE_TODO, EDIT_TODO } from "./actionTypes";

const initialeState = {
    todos : [
        { id : Math.random() , text : "tas1 " , isDone : false } ,
        { id : Math.random() , text : "tas1 " , isDone : false } 

    ]
}

const reducer = (state = initialeState , action )=> {
    switch (action.type) {
        case ADD_TODO :
            return {
                todos : [...state.todos , {
                    id: action.payload.id ,
                    task : action.payload.task 
                }] 

            }
        case REMOVE_TODO : 
        return {
            todos : [...state.todos.filter(todo => todo.id !== action.payload)]
        }
        case DONE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
                )
            }
            case EDIT_TODO : 
            return {
                ...state ,
                 todos: state.todos.map( todo => 
                    todo.id === action.payloadd ? {...todo ,text : action.payload.newTodo} : todo
                ) 
            }
        default :
        return state ;
    }
}
export default reducer ;