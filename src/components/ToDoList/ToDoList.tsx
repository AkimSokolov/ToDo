import React, { FC } from "react";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { ToDoItem } from "../ToDoItem/ToDoItem";


export const ToDoList: FC = () => {
    const {todoItems,sortMode} = useTypeSelector(state => state.todo)
    
    return (
        <div className="todo-list">
            {todoItems.filter(item => {
                if(sortMode === "All"){
                    return true
                }
                else if(sortMode === "Done"){
                    return item.completed
                }
                else if(sortMode === "Undone"){
                    return !item.completed
                }
            }).map(todo =>{
                return(
                    <ToDoItem
                        key = {todo.id}
                        todo = {todo}
                    />
                )
            })}
        </div>
    )
}