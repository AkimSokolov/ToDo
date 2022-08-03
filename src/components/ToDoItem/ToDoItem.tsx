import React, { FC, useState } from "react";
import { ToDoItemType } from "../../types/types";
import "../../styles/ToDoItem.css"
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import { SubTaskList } from "../SubTaskList/SubTaskList";

interface ToDoItemProps {
    todo: ToDoItemType
}

export const ToDoItem = (props:ToDoItemProps) => {
    const [disabled, setDisabled] = useState(true);
    const [subtasksVisible, setSubTasksVisible] = useState(false);
    const todo = props.todo;
    const {todoItems, sortMode} = useTypeSelector(state => state.todo);
    const dispatch = useDispatch();

    const changePriority = (direction: string) => {
        if (direction === "UP"){
            const interleavedElementPriority = todoItems.filter(item => {
                return(
                    (sortMode === "All" ? true : item.completed === todo.completed)
                    && 
                    item.priority < todo.priority
                )
            }).pop()?.priority
            if (interleavedElementPriority !== undefined){
                todoItems[interleavedElementPriority].priority = todo.priority;
                todoItems[todo.priority].priority = interleavedElementPriority;
                todoItems.sort((todo1,todo2) => (todo1.priority - todo2.priority));
                dispatch({type: "CHANGE_PRIORITY", payload: todoItems})
            }
        }
        else if (direction === "DOWN"){
            const interleavedElementPriority = todoItems.filter(item => {
                return(
                    (sortMode === "All" ? true : item.completed === todo.completed)
                    && 
                    item.priority > todo.priority
                )
            }).shift()?.priority
            if(interleavedElementPriority !== undefined){
                todoItems[interleavedElementPriority].priority = todo.priority;
                todoItems[todo.priority].priority = interleavedElementPriority;
                todoItems.sort((todo1,todo2) => (todo1.priority - todo2.priority));
                dispatch({type: "CHANGE_PRIORITY", payload: todoItems})
            }
        }
    }
    const changeDescription = (event: any) => {
        todoItems[todo.priority].name = event.target.value;
        dispatch({type: "CHANGE_DESCRIPTION", payload: todoItems})
    }
    const removeItem = () => {
        const newToDoList = todoItems.filter(item => item.id != todo.id);
        newToDoList.forEach((item,index) => (item.priority = index));
        dispatch({type: "REMOVE_TASK", payload: newToDoList});
    }
    const completeItem = () => {
        const currentComplete = todoItems[todo.priority].completed;
        todoItems[todo.priority].completed = !currentComplete;
        dispatch({type:"COMPLETE_TASK",payload:todoItems});
    }

    return(
        <div>
            <div className='todo-item-shell'>
                <div className='todo-item'>
                    <button 
                        className="add-subtask-menu"
                        onClick={() => setSubTasksVisible(!subtasksVisible)}
                    >&#8627;</button>
                    
                    <button 
                        className="change-priority"
                        onClick={() => changePriority("UP")}
                    >&#5123;</button>

                    <button
                        className="change-priority"
                        onClick={() => changePriority("DOWN")}
                    >&#5121;</button>

                    <label >
                        <input 
                            type="text" 
                            value={todo.name} 
                            onChange={(event) => changeDescription(event)}
                            className={todo.completed ? 'task-descriprion-checked' : 'task-descriprion'}
                            disabled = {disabled}
                        />
                    </label>

                    <button 
                        className="change-descriprtion"
                        onClick ={() => {setDisabled(!disabled)}}
                    >&#128393;</button>

                    <button 
                        className="remove-task"
                        onClick={removeItem}
                    >&#10006;</button>
                        
                    <input 
                        type="checkbox"
                        checked = {todo.completed}
                        className="todo-checkbox"
                        onChange={() => {}}
                        onClick={completeItem}
                    />     
                     {subtasksVisible ? <SubTaskList  rootToDoIndex = {todo.priority}/> : "" }   
                </div>
            </div>
        </div>
    )
}