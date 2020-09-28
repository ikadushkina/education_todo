import * as constants from './constants';

const initState = {
    isLoading: false,
    error: null,
    users: [],
}

export default function (state = initState, action) {
    switch (action.type) {
        case constants.REGISTER_START: {
            return {...state, isLoading: true}
        }
        case constants.REGISTER_ERROR: {
            return { isLoading: false, error: action.payload, users: null}
        }
        case constants.REGISTER_SUCCESS: {
            return { isLoading: false, users: action.payload, error: null}
        }
        default: {
            return state;
        }
    }
}