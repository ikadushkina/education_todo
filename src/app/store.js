import {combineReducers, createStore} from '@reduxjs/toolkit';
import reducer from './Containers/TodoList/reducer';
import register from './../reducers/registerReduser'
import loginer from './../reducers/loginReducer'
import {applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    reducer,
    register,
    loginer
});

const logger = () => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.groupEnd()
    return result
}

const middlewareEnhancer = applyMiddleware(thunkMiddleware, logger)

const store = createStore(rootReducer, middlewareEnhancer);

store.subscribe(() => {
    console.log('store', store.getState().reducer);
})

export default store;