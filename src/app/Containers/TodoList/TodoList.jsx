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
import {addTask, deleteTask, checkedTask, completedAll, clearCompleted, filterAll, filterTodo, filterCompleted} from "./reducer/actions";
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
        e.target.value = '';
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
                <div className={this.props.tasks.length ? 'options-panel' : 'none'}>
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
        onAddTask: (text, id) => {
            dispatch(addTask(id, text, false))
        },
        onMark: (id) => {
            dispatch(checkedTask(id))
        },

        onDelete: (id) => {
            dispatch(deleteTask(id))
        },

        onClear: () => {
            dispatch(clearCompleted())
        },

        onCompleted: () => {
            dispatch(completedAll())
        },
        onFilters: (filter) => {
            switch (filter) {
                case 'All':
                    return dispatch(filterAll());
                case 'ToDo':
                    return dispatch(filterTodo());
                case 'Completed':
                    return dispatch(filterCompleted())
            }
        }
    }
};
//todo implement this function

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
