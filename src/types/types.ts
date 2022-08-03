
export interface ToDoItemType {
    id: number,
    priority: number,
    name: string,
    subTasks: SubTaskItemType[],
    completed: boolean
}

export interface SubTaskItemType{
    id: number,
    name: string,
    completed: boolean
}

interface CreateTaskAction {
    type: ToDoActionTypes.CREATE_TASK,
    payload: ToDoItemType[]
}

interface RemoveTaskAction {
    type: ToDoActionTypes.REMOVE_TASK,
    payload: ToDoItemType[];
}
interface ChangePriorityAction{
    type: ToDoActionTypes.CHANGE_PRIORITY,
    payload: ToDoItemType[]
}
interface CreateSubtaskAction{
    type: ToDoActionTypes.CREATE_SUBTASK,
    payload: ToDoItemType[]
}
interface CompleteTaskAction{
    type: ToDoActionTypes.COMPLETE_TASK,
    payload: ToDoItemType[]
}
interface ChangeSortModeAction{
    type: ToDoActionTypes.CHANGE_SORT_MODE,
    payload: string
}
interface ChangeDescription{
    type: ToDoActionTypes.CHANGE_DESCRIPTION,
    payload: ToDoItemType[]
}
interface RemoveSubTaskAction{
    type: ToDoActionTypes.REMOVE_SUBTASK,
    payload: ToDoItemType[]
}
interface CompleteSubTaskAction{
    type: ToDoActionTypes.COMPLETE_SUBTASK,
    payload: ToDoItemType[]
}

export enum ToDoActionTypes {
    CREATE_TASK = "CREATE_TASK",
    REMOVE_TASK = "REMOVE_TASK",
    REMOVE_SUBTASK = "REMOVE_SUBTASK",
    CHANGE_PRIORITY = "CHANGE_PRIORITY",
    CREATE_SUBTASK = "CREATE_SUBTASK",
    COMPLETE_TASK = "COMPLETE_TASK",
    COMPLETE_SUBTASK = "COMPLETE_SUBTASK",
    CHANGE_SORT_MODE = "CHANGE_SORT_MODE",
    CHANGE_DESCRIPTION ="CHANGE_DESCRIPTION",
}

export type ToDoAction =
     CreateTaskAction | 
     RemoveTaskAction | 
     ChangePriorityAction | 
     CreateSubtaskAction | 
     CompleteTaskAction | 
     ChangeSortModeAction | 
     ChangeDescription | 
     RemoveSubTaskAction | 
     CompleteSubTaskAction;

export interface ToDoState {
    todoItems: ToDoItemType[],
    sortMode: string,
    currentId: number,
    currentSubTaskId: number,
}
