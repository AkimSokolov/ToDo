import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useTypeSelector } from "../../hooks/useTypeSelector"
import "../../styles/SubTaskList.css"
import { SubTaskItem } from "../SubTaskItem/SubTaskItem"

interface SubTaskListProps {
    rootToDoIndex: number
}

export const SubTaskList = (props:SubTaskListProps) => {
    const rootTodoItem = useTypeSelector(state => state.todo.todoItems[props.rootToDoIndex]) 
    const todoList = useTypeSelector(state => state.todo.todoItems);
    const currentSubTaskId = useTypeSelector(state => state.todo.currentSubTaskId)
    const [value,setValue] = useState("");
    const dispatch = useDispatch();
    
    const createSubTasks = (event:any) => {
        event.preventDefault();
        if(value.trim() !== ""){
            rootTodoItem.subTasks = [...rootTodoItem.subTasks, {
                id: currentSubTaskId ,
                name: value.trim(),
                completed: false,
            }];
            todoList[props.rootToDoIndex] = rootTodoItem;
            dispatch({type: "CREATE_SUBTASK", payload: todoList});
            setValue("")
        }
    }
    
    return(
        <div className="subtask-list-shell">
            {rootTodoItem.subTasks.map(item => {
                return(<SubTaskItem key = {item.id} subTask = {item} rootToDoIndex = {props.rootToDoIndex}/>)
            })}
            <form className="subtask-list-form">
                <div className="line"><span>⸠</span></div>
                <button onClick={(event) => createSubTasks(event)}>+</button>
                <label>
                    <input
                        type="text"
                        value={value} 
                        onChange={(event) => setValue(event.target.value)}
                        placeholder="Add subtask"
                    ></input>
                </label>
            </form>
        </div>
    )
}