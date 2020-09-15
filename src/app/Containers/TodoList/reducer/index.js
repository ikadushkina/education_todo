

const initialState = {
    tasks:[
        {
        id: 0,
        text: 'This is first test task',
        checked: true,
    }
    ],
    currentFilter: 'All',
}

export default function (state = initialState, action){
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, { id: action.id, text: action.text, checked: action.checked }]
            };
            // return [...state, { id: action.id, text: action.text, checked: action.checked }];
        case 'DELETE_TASK':
            return {...state, tasks: state.tasks.filter( elem => elem.id !== action.id )};
        case 'CHECKED':
            return {...state, tasks: state.tasks.map(item => item.id === action.id ? {...item, checked: !item.checked} : item )};
        case 'CLEAR':
            return {...state, tasks: state.tasks.map(item => ({...item, checked: false}))};
        case 'COMPLETED_ALL':
            return {...state, tasks: state.tasks.map(item => ({...item, checked: true}))};
        default:
            return  state;
    }
}
