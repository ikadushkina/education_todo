import * as constants from './constants';

export function addTask(id, text, checked){
    return { type: constants.ADD_TASK, id, text, checked }
}
export  function deleteTask(id){
    return { type: constants.DELETE_TASK, id}
}
export function checkedTask(id){
    return {type: constants.CHECKED, id}
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
