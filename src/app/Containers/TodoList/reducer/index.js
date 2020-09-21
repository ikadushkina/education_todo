import * as constants from './constants';

const initState = {
    isLoading: false,
    error: null,
    list: [],
}

export default function (state = initState, action) {
    switch (action.type) {
        case constants.TEMP_TODO_START:
            return {...state, isLoading: true};
        case constants.TEMP_TODO_SUCCESS:
            return {isLoading: false, error: null, list: action.payload}
        case constants.TEMP_TODO_ERROR:
            return {isLoading: false, error: action.payload, list: null}
        default:
            return state;
    }
}