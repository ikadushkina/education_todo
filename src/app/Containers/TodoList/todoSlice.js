import {createSlice} from '@reduxjs/toolkit';
import store from "../../store";

export const initialState = {
    tasks: [
        {
            id: 0,
            text: 'task #0',
            checked: true
        },
        {
            id: 1,
            text: 'task #1',
            checked: false
        },
        {
            id: 2,
            text: 'task #2',
            checked: false
        }
    ],  // task should have a format {id: unique_value, text: task_text, checked: flag_show_if_task_completed (false by default) }
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: (state = initialState.tasks, {payload}) => {
            // return [...state, { id: action.id, text: action.text, checked: action.checked }]

            // todo implement function for add new todo into list
        },
        remove: (state, {payload}) => {

            // todo implement function for remove todo from the list
        },
        markAsChecked: (state, {payload}) => {  // todo implement function for mark task checked by id
        },
        clearCompleted: state => {  //todo implement function for remove all completed (checked ) tasks
        },
        checkAll: state => {
        }
    },
});

export const actions = todoSlice.actions;

export default todoSlice.reducer;
