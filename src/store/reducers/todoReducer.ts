
import { ToDoState, ToDoAction, ToDoActionTypes} from "../../types/types"


const initialState: ToDoState = {
    todoItems: [],
    sortMode: "All",
    currentId: 1,
    currentSubTaskId: 1,
}



export const todoReducer = (state = initialState, action: ToDoAction): ToDoState => {
    switch (action.type) {

        case ToDoActionTypes.CREATE_TASK:
            return {...state, todoItems: action.payload, currentId: state.currentId + 1}
        
        case ToDoActionTypes.REMOVE_TASK:
            return {...state, todoItems: action.payload}
    
        case ToDoActionTypes.CHANGE_PRIORITY:
            return {...state, todoItems: action.payload}
        
        case ToDoActionTypes.CREATE_SUBTASK:
            return {...state, todoItems: action.payload, currentSubTaskId: state.currentSubTaskId + 1}
        
        case ToDoActionTypes.COMPLETE_TASK:
            return {...state, todoItems: action.payload}
        
        case ToDoActionTypes.CHANGE_SORT_MODE:
            return {...state, sortMode: action.payload} 

        case ToDoActionTypes.CHANGE_DESCRIPTION:
            return {...state, todoItems: action.payload}

        case ToDoActionTypes.REMOVE_SUBTASK:
            return {...state, todoItems: action.payload}
        
        case ToDoActionTypes.COMPLETE_SUBTASK:
            return {...state, todoItems: action.payload}
                
        default : 
            return state
    }
}