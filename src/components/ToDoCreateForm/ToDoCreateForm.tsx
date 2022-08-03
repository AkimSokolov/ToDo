import { FC, useState } from "react"
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import "../../styles/ToDoCreateForm.css"
import { ToDoItemType } from "../../types/types";

export const ToDoCreateForm: FC = () => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch()
    const todoList = useTypeSelector(state => state.todo.todoItems)
    const currentId = useTypeSelector(state => state.todo.currentId)
    
    const createNewToDo = (event:any) => {
        event.preventDefault()
        if (value.trim() !== "") {
            const newToDoList: ToDoItemType[] = [
                {
                    id: currentId,
                    priority: 0,
                    name: value.trim(),
                    subTasks: [],
                    completed: false,
                },
                ...todoList
            ];
            newToDoList.forEach((todo,index) => (todo.priority = index));
            setValue("");
            dispatch({type: "CREATE_TASK", payload: newToDoList})
        }
    }

    return (
        <div className="todo-create-form-shell">
            <div className='todo-create-form'>
                <form onSubmit={(event) => createNewToDo(event)}>
                    <input type="submit" value="Create" className='tasks-creator-button'/>
                    <label>
                        <input 
                            type="text" 
                            value={value} 
                            onChange={(event) => setValue(event.target.value)}
                            placeholder="Create new task"
                            className='todo-create-form-text-holder'
                        />
                    </label>
                </form>
            </div>
        </div>
    )
}