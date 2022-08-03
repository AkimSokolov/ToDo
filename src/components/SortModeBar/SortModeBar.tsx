import { FC } from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import "../../styles/SortModeBar.css";

export const SortModeBar: FC = () => {
    const sortMode = useTypeSelector(state => state.todo.sortMode)
    const dispatch = useDispatch()

    const changeSortMode = (newSortMode: string) => {
        dispatch({type: "CHANGE_SORT_MODE", payload: newSortMode})
    }

    return (
        <div className="sort-mode-bar">
            <button className={"sort-mode-button-" + (sortMode==="All").toString()} onClick={() => changeSortMode("All")}>All</button>
            <button className={"sort-mode-button-" + (sortMode==="Undone").toString()} onClick={() => changeSortMode("Undone")}>Undone</button>
            <button className={"sort-mode-button-" + (sortMode==="Done").toString()} onClick={() => changeSortMode("Done")}>Done</button>
        </div>
    )
}