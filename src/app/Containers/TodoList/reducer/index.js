const initialState = {
    tasks: [
    ],
    currentFilter: 'All',
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, {id: action.id, text: action.text, checked: action.checked}]
            };
        case 'DELETE_TASK':
            return {...state, tasks: state.tasks.filter(elem => elem.id !== action.id)};
        case 'CHECKED':
            return {
                ...state,
                tasks: state.tasks.map(item => item.id === action.id ? {...item, checked: !item.checked} : item)
            };
        case 'CLEAR':
            return {...state, tasks: state.tasks.map(item => ({...item, checked: false}))};
        case 'COMPLETED_ALL':
            return {...state, tasks: state.tasks.map(item => ({...item, checked: true}))};
        case 'ALL_FILTER':
            return {...state, currentFilter: 'All'};
        case 'TODO_FILTER':
            return {...state, currentFilter: 'ToDo'}
        case 'COMPLETED_FILTER':
            return {...state, currentFilter: 'Completed'}
        default:
            return state;
    }
}
