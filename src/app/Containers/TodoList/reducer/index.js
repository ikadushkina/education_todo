import * as constants from './constants';

const initialState = {
    tasks: [
    ],
    currentFilter: 'All',
}

export default function (state = initialState, action) {
    switch (action.type) {
        case constants.ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, {id: action.id, text: action.text, checked: action.checked}]
            };
        case constants.DELETE_TASK:
            return {...state, tasks: state.tasks.filter(elem => elem.id !== action.id)};
        case constants.CHECKED:
            return {
                ...state,
                tasks: state.tasks.map(item => item.id === action.id ? {...item, checked: !item.checked} : item)
            };
        case constants.CLEAR_COMPLETED:
            return {...state, tasks: state.tasks.map(item => ({...item, checked: false}))};
        case constants.COMPLETED_ALL:
            return {...state, tasks: state.tasks.map(item => ({...item, checked: true}))};
        case constants.ALL_FILTER:
            return {...state, currentFilter: 'All'};
        case constants.TODO_FILTER:
            return {...state, currentFilter: 'ToDo'}
        case constants.COMPLETED_FILTER:
            return {...state, currentFilter: 'Completed'}
        default:
            return state;
    }
}
