

const initialState = {
    tasks:[
        {
        id: 0,
        text: 'This is first test task',
        checked: true,
    }
    ],
    currentFilter: 'All'
}

export default function (state = initialState.tasks, action){
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, { id: action.id, text: action.text, checked: action.checked }];
        case 'DELETE_TASK':
            return state.filter( elem => elem.id !== action.id );
        case 'CHECKED':
            return state.map(item => item.id === action.id ? {...item, checked: !item.checked} : item );
        case 'CLEAR':
            return state.map(item => ({...item, checked: false}));
        case 'COMPLETED_ALL':
            return state.map(item => ({...item, checked: true}));
        default:
            return  state;
    }
}
