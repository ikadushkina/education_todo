import * as constants from './constants';

export function addTask(){
    return { type: constants.ADD_TASK }
}
export  function deleteTask(){
    return { type: constants.DELETE_TASK }
}
export function checkedTask(){
    return {type: constants.CHECKED}
}
export function completedAll(){
    return { type: constants.COMPLETED_ALL }
}
export function clearCompleted(){
    return { type: constants.CLEAR_COMPLETED }
}
export function filterAll(){
    return { type: constants.ALL_FILTER }
}
export  function filterTodo(){
    return { type: constants.TODO_FILTER }
}
export function filterCompleted() {
    return{ type: constants.COMPLETED_FILTER }
}
