import * as constants from './constants';
import TodoService from "../../../../services/TodoService";

export const tempTodoGet = () => dispatch => {
    dispatch({
        type: constants.TEMP_TODO_START
    });
    return TodoService.getTasks().then(res => {
        dispatch({
            type: constants.TEMP_TODO_SUCCESS,
            payload: res.data.list,
        });
    }).catch(err => {
        dispatch({
            type: constants.TEMP_TODO_ERROR,
            payload: err,
        });
    });
}

export const tempAddTask = text => dispatch => {
    dispatch({
        type: constants.TEMP_TODO_START
    });
    return TodoService.addTask(text).then(res => {
        dispatch({
            type: constants.TEMP_TODO_SUCCESS,
            payload: res.data.list,
        });
    }).catch(err => {
        dispatch({
            type: constants.TEMP_TODO_ERROR,
            payload: err,
        });
    });
}

export const tempCheckTask = id => dispatch => {
    dispatch({
        type: constants.TEMP_TODO_START
    });
    return TodoService.checkTask(id).then( res => {
        dispatch({
            type: constants.TEMP_TODO_SUCCESS,
            payload: res.data.list
        });
        }).catch(err => {
            dispatch({
                type: constants.TEMP_TODO_ERROR,
                payload: err
            });
    });
}
export const tempDeleteTask = id => dispatch => {
    dispatch({
        type: constants.TEMP_TODO_START
    });
    return TodoService.deleteTask(id).then( res => {
        dispatch({
            type: constants.TEMP_TODO_SUCCESS,
            payload: res.data.list
        });
    }).catch(err => {
        dispatch({
            type: constants.TEMP_TODO_ERROR,
            payload: err
        });
    });
}
