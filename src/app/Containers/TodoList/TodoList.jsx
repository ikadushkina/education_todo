import React from 'react';
import TodoItem from '../../Components/TodoItem/TodoItem';
import store from "../../store";
import {connect} from 'react-redux'

/**
 * todo implement component called ToDoInput
 * which should receive onSubmit function which will be called on the press enter key
 * should receive placeholder value which should show as placeholder for the input
 * this input changes should be managed by local state inside ToDoInput component
 * Use this component for enter tasks name
 */

import './TodoList.scss'
import RadioBadge from "../../Components/RadioBadge/RaidoBadge";

/**
 * todo use this list of the control badges to show them at the control panel
 */

import {controlBadges} from '../../constants/todo';
import ToDoInput from "../../Components/TodoInput/ToDoInput";
// import connect from "react-redux/lib/connect/connect";
// import {initialState, todoSlice} from "./todoSlice";

/**
 * todo implement HOC for display the list of the todos and control panel and input for add new todos
 */
export class TodoList extends React.Component {

    addTask = e => {
        if (e.key !== 'Enter') return
        const text = e.target.value
        const id = this.props.tasks.length ? this.props.tasks[this.props.tasks.length - 1].id + 1 : 0
        this.props.onAddTask(text, id);
        console.log('....', store.getState());
        e.target.value = '';
    }

    filters = (filter) => {
        switch (filter) {
            case 'All':
                return this.props.tasks
            case 'ToDo':
                return this.props.tasks.filter(item => !item.checked)
            case 'Completed':
            default:
        }
        console.log('active: ', this.props.activeFilter);
    }

    render() {
        const task = this.props.tasks
        return (
            <div className='main-container'>
                <ToDoInput addTask={this.addTask}/>
                <div className='task-container'>
                    {task.filter(elem => {
                        switch (this.props.activeFilter) {
                            case 'Completed':
                                return elem.checked;
                            case 'ToDo':
                                return !elem.checked;
                            case  'All':
                                return true;
                        }
                    }).map(elem => (
                        <TodoItem
                            {...elem}
                            key={elem.id}
                            handleChange={() => this.props.onMark(elem.id)}
                            deleteTask={() => this.props.onDelete(elem.id)}
                        />
                    ))}
                </div>
                <div className='options-panel'>
                    <button
                        onClick={this.props.onCompleted}
                        value='all'
                        className='button-new'>
                        {task.filter(elem => !elem.checked).length} tasks left
                    </button>
                    <RadioBadge
                        checked={this.props.activeFilter}
                        bags={controlBadges}
                        onChange={(a) => this.props.onFilters(a)}
                    />
                    <button
                        onClick={this.props.onClear} value='clear'
                        className={!task.filter(elem => elem.checked).length ? 'button-hide' : 'button-new'}>clearCompleted
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = () => {
    return {
        tasks: store.getState().reducer.tasks,
        activeFilter: store.getState().reducer.currentFilter
    }
}//todo setup this method for get info from the global state

const mapDispatchToProps = dispatch => {
    return {
        onAddTask: (taskText, id) => {
            dispatch({
                type: 'ADD_TASK',
                id: id,
                text: taskText,
                checked: false,
            })
        },
        onMark: (id) => {
            dispatch({
                type: 'CHECKED',
                id: id,
            })
        },
        onDelete: (id) => {
            dispatch({
                type: 'DELETE_TASK',
                id: id,
            })
        },

        onClear: () => {
            dispatch({
                type: 'CLEAR'
            })
        },

        onCompleted: () => {
            dispatch({
                type: 'COMPLETED_ALL'
            })
        },
        onFilters: (filter) => {
            switch (filter) {
                case 'All':
                    return dispatch({type: 'ALL_FILTER'});
                case 'ToDo':
                    return dispatch({type: 'TODO_FILTER'});
                case 'Completed':
                    return dispatch({type: 'COMPLETED_FILTER'})
            }
        }
    }
};
//todo implement this function

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
