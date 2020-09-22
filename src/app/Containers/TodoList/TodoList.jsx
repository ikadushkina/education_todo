import React from 'react';
import TodoItem from '../../Components/TodoItem/TodoItem';
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
import {
    tempAddTask,
    tempCheckAll,
    tempCheckTask,
    tempClearCompleted,
    tempDeleteTask, tempFilterAll, tempFilterCompleted, tempFilterTodo,
    tempTodoGet
} from "./reducer/actions";


/**
 * todo implement HOC for display the list of the todos and control panel and input for add new todos
 */
export class TodoList extends React.Component {

    componentDidMount() {
        this.props.onStart()
    }

    addTask = e => {
        if (e.key !== 'Enter') return
        const text = e.target.value
        this.props.onAddTask(text);
        e.target.value = '';
    }

    render() {
        const {list, isLoading, error } = this.props;
        return (
            <div className='main-container'>
                {error && <h3 style={{color: 'red'}}>{error.message}</h3>}
                <ToDoInput addTask={this.addTask}/>
                <div className='task-container'>
                    { list && list.map(elem => (
                        <TodoItem
                            {...elem}
                            key={elem._id}
                            id={elem._id}
                            handleChange={() => this.props.onCheckTask(elem._id)}
                            deleteTask={() => this.props.onDeleteTask(elem._id)}
                            isCompleted={elem.isCompleted}
                        />
                    ))}
                </div>
                <div className={list.length ? 'options-panel' : 'none'}>
                    <button
                        disabled={isLoading}
                        onClick={this.props.onCheckAll}
                        value='all'
                        className='button-new'>
                        {list.filter(elem => !elem.isCompleted).length} tasks left
                    </button>
                    <RadioBadge
                        bags={controlBadges}
                        onChange={(a) => this.props.onFilters(a)}
                    />
                    <button
                        disabled={isLoading}
                        onClick={this.props.onClearCompleted} value='clear'
                        className={!list.filter(elem => elem.isCompleted).length ? 'button-hide' : 'button-new'}>clearCompleted
                    </button>
                </div>
        </div>
        )
    }
}
const mapStateToProps = state => state.reducer;
//todo setup this method for get info from the global state

const mapDispatchToProps = dispatch => ({
        onStart: () => dispatch(tempTodoGet()),
        onAddTask: text => dispatch(tempAddTask(text)),
        onCheckTask: id => dispatch(tempCheckTask(id)),
        onDeleteTask: id => dispatch(tempDeleteTask(id)),
        onCheckAll: () => dispatch(tempCheckAll()),
        onClearCompleted: () => dispatch(tempClearCompleted()),
        onFilters: (filter) => {
            switch (filter) {
                case 'All':
                    return dispatch(tempFilterAll());
                case 'ToDo':
                    return dispatch(tempFilterTodo());
                case 'Completed':
                    return dispatch(tempFilterCompleted())
            }
        }
    }
);
//todo implement this function

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
