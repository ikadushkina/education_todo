import React from 'react';
import TodoItem from '../../Components/TodoItem/TodoItem';

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
import connect from "react-redux/lib/connect/connect";
import {initialState, todoSlice} from "./todoSlice";

/**
 * todo implement HOC for display the list of the todos and control panel and input for add new todos
 */
export class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                // {
                //     id: 0,
                //     text: 'task #0',
                //     checked: true
                // },
                // {
                //     id: 1,
                //     text: 'task #1',
                //     checked: false
                // },
                // {
                //     id: 2,
                //     text: 'task #2',
                //     checked: false
                // },
                // {
                //     id: 3,
                //     text: 'task #3',
                //     checked: true
                // }
            ],
            currentFilter: '',
            newPoint: ''
        }
        this.addTask = this.addTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
    }

   filters = (filter) => {
        switch (filter) {
            case 'All':
                this.setState({currentFilter: 'All'})
                break;
            case 'ToDo':
                this.setState({currentFilter: 'ToDo'})
                break;
            case 'Completed':
                this.setState({currentFilter: 'Completed'})
                break;
        }
    }

    // componentDidMount() {
    //     this.setState({currentFilter: 'All'})
    // }

    handleChange(id) {
        const newList = this.state.list.map(item => item.id === id ? {...item, checked: !item.checked} : item);
        this.setState({list: newList});
    }

    deleteTask(id) {
        const newList = this.state.list.filter(elem => elem.id !== id)
        this.setState({list: newList});
    }

    addTask(e) {
        if (e.key !== 'Enter') return
        const {list, newPoint} = this.state
        let id;
        if(this.state.list.length) id =  list[list.length - 1].id + 1;
        else id = 0;
        const point = {
            id: id,
            text: newPoint,
            checked: false
        }
        this.setState({list: [...list, point], newPoint: ''})
    }

    upInput = e => {
        this.setState({newPoint: e.target.value})
    }

    completed = e => {
        const newList = this.state.list.map(item => ({...item, checked: e.target.value === 'All '}));
        this.setState({list: newList})
    }

    render() {
        const {currentFilter, newPoint, list} = this.state;
        return (
            <div className='main-container'>
                <ToDoInput addTask={this.addTask} value={newPoint} onChange={this.upInput}/>
                <div className='task-container'>
                    {list.filter(elem => {
                        switch (currentFilter) {
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
                            handleChange={() => this.handleChange(elem.id)}
                            deleteTask={() => this.deleteTask(elem.id)}
                        />
                    ))}
                </div>
                <div className={this.state.list.length ? 'options-panel' : 'none'}>
                    <button onClick={this.completed}
                            value='all'
                            className='button-new'>{this.state.list.filter(elem => !elem.checked).length} tasks left
                    </button>
                    <RadioBadge
                        checked={currentFilter}
                        bags={controlBadges}
                        onChange={this.filters}
                    />
                    <button
                        onClick={this.completed} value='clear'
                        className={!this.state.list.filter(elem => elem.checked).length ? 'button-hide' : 'button-new'}>clearCompleted
                    </button>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = state => state.todoSlice;  //todo setup this method for get info from the global state

const mapDispatchToProps = dispatch => todoSlice.reducer ;  //todo implement this function


// export default connect(mapStateToProps, null)(TodoList)
export default TodoList
