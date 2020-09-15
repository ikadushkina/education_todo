import React from 'react';
import TodoItem from '../../Components/TodoItem/TodoItem';
import store from "../../store";
import { connect } from 'react-redux'

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
    // constructor(props) {
    //     super(props);
    // }
    addTask (e) {
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
                <ToDoInput addTask={this.addTask.bind(this)} />
                {
                    task.map(elem =>
                   <TodoItem
                       {...elem}
                       key={elem.id}
                       handleChange={() => this.props.onMark(elem.id)}
                       deleteTask={() => this.props.onDelete(elem.id)}
                   />
                )}
                <div className='options-panel'>
                {/*    <button*/}
                {/*        onClick={this.completed}*/}
                {/*            value='all'*/}
                {/*            className='button-new'>{this.state.list.filter(elem => !elem.checked).length} tasks left*/}
                {/*    />*/}
                {/*    <RadioBadge*/}
                {/*        checked={currentFilter}*/}
                {/*        bags={controlBadges}*/}
                {/*        onChange={this.filters}*/}
                {/*    />*/}
                {/*    <button*/}
                {/*        onClick={this.completed} value='clear'*/}
                {/*        className={!this.state.list.filter(elem => elem.checked).length ? 'button-hide' : 'button-new'}>clearCompleted*/}
                {/*    />*/}
                </div>
            </div>
        )
    }
}

const mapStateToProps = () => { return {
    tasks: store.getState().reducer
} }//todo setup this method for get info from the global state

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
        }
    }
};
//todo implement this function


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
// export default TodoList

// filters = (filter) => {
//      switch (filter) {
//          case 'All':
//              this.setState({currentFilter: 'All'})
//              break;
//          case 'ToDo':
//              this.setState({currentFilter: 'ToDo'})
//              break;
//          case 'Completed':
//              this.setState({currentFilter: 'Completed'})
//              break;
//      }
//  }
//
//  componentDidMount() {
//      this.setState({currentFilter: 'All'})
//      console.log('....', this.state);
//  }
//
//  handleChange(id) {
//      const newList = this.state.list.map(item => item.id === id ? {...item, checked: !item.checked} : item);
//      this.setState({list: newList});
//  }
//
//  deleteTask(id) {
//      const newList = this.state.list.filter(elem => elem.id !== id)
//      this.setState({list: newList});
//  }
//
//  addTask(e) {
//      if (e.key !== 'Enter') return
//      const {list, newPoint} = this.state
//      let id;
//      if(this.state.list.length) id =  list[list.length - 1].id + 1;
//      else id = 0;
//      const point = {
//          id: id,
//          text: newPoint,
//          checked: false
//      }
//      this.setState({list: [...list, point], newPoint: ''})
//  }
//
//  upInput = e => {
//      this.setState({newPoint: e.target.value})
//  }
//
//  completed = e => {
//      const newList = this.state.list.map(item => ({...item, checked: e.target.value === 'all'}));
//      this.setState({list: newList})
//  }
