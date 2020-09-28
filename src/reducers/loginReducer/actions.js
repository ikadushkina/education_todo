import * as constants from './constants'
import AuthService from "../../services/AuthService";

console.log("AuthService",AuthService,AuthService.loginUser)


export const loginUser = (login, password, successCallback) => dispatch => {
    dispatch({
        type: constants.LOGIN_START
    });
    AuthService.loginUser(login, password).then( res => {
        dispatch({
            type: constants.LOGIN_SUCCESS,
            payload: res.data.users
        });
        successCallback();
    }).catch(err => {
        dispatch({
            type: constants.LOGIN_ERROR,
            payload: err
        });
    });
}
