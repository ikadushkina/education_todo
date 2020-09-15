import {combineReducers, createStore} from '@reduxjs/toolkit';
import reducer from './Containers/TodoList/reducer';

const rootReducer = combineReducers({
    reducer,
});

const store = createStore(rootReducer);

store.subscribe(() => {
    console.log('store', store.getState().reducer);
})

export default store;