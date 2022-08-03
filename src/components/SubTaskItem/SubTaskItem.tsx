import { useDispatch } from "react-redux"
import { useTypeSelector } from "../../hooks/useTypeSelector"
import "../../styles/SubTaskList.css"
import {SubTaskItemType} from "../../types/types"

interface SubTaskItemProps {
    rootToDoIndex: number,
    subTask: SubTaskItemType,
}


export const SubTaskItem = (props:SubTaskItemProps) =>  {

    const todoList = useTypeSelector(state => state.todo.todoItems)
    const dispatch = useDispatch()
    const currentSubTasks = todoList[props.rootToDoIndex].subTasks

    const removeSubTask = () => {
        todoList[props.rootToDoIndex].subTasks = todoList[props.rootToDoIndex].subTasks.filter( item => item.id != props.subTask.id)
        dispatch({type: "REMOVE_SUBTASK", payload: todoList});
    }
    const completeSubTask = () => {
        const completedElementIndex = currentSubTasks.findIndex(item => item.id === props.subTask.id)
        const currentComplete = currentSubTasks[completedElementIndex].completed;
        todoList[props.rootToDoIndex].subTasks[completedElementIndex].completed = !currentComplete;
        dispatch({type: "COMPLETE_SUBTASK", payload: todoList})
    }


    return(
        <div className="subtask-item">
            <div className="line"><span>⸠</span></div>
            <input 
                type = "checkbox" 
                className="subtask-description"
                checked = {props.subTask.completed} 
                onChange = {() => {}} 
                onClick={completeSubTask} />
            <button  
                onClick={removeSubTask}>
                <span
                >&#10006;</span>
            </button>
            <input
                className={props.subTask.completed ? "subtask-description-complete" : "subtask-description"}
                value = {props.subTask.name}    
                disabled
            />
        </div>
    )
}