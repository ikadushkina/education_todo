import * as constants from './constants'
import AuthService from "../../services/AuthService";

export const register = (login, pass) => dispatch => {
    dispatch({
        type: constants.REGISTER_START
    });
    return AuthService.addUser(login, pass).then( res => {
        dispatch({
            type: constants.REGISTER_SUCCESS,
            payload: res.data.users
        });
    }).catch(err => {
        dispatch({
            type: constants.REGISTER_ERROR,
            payload: err
        });
    });
}

export const getUsers = () => dispatch => {
    dispatch({
        type: constants.REGISTER_START
    });
    return AuthService.getUsers().then( res => {
        dispatch({
            type: constants.REGISTER_SUCCESS,
            payload: res.data.users
        });
    }).catch(err => {
        dispatch({
            type: constants.REGISTER_ERROR,
            payload: err
        });
    });
}
