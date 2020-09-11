import React from 'react';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './TodoItem.scss';
import store from "../../store";
import {initialState} from "../../Containers/TodoList/todoSlice";


/**
 * todo implement here component which will show todo item
 * Component should contain checkbox text and trash icon for remove item
 *
 * This component should receive the following params
 * text -  name of task
 * id - id of task
 * checked - checked state of the task
 * onCheck - callback which should be called if the checkbox state was changed
 * onRemove - callback which should be called if the trash icon was called
 *
 * NOTE: need to pass task id into callbacks as param
 */
export default function TodoItem({handleChange, id, checked, text, deleteTask}) {
    return (
        <div className='task'>
            <div className='one-task'>
                <input
                    type='checkbox'
                    id={id}
                    checked={checked}
                    onChange={handleChange}
                    className={checked && 'check-checked'}
                /><label htmlFor={id}/>
                <p className={checked && 'completed-task'}>{text}</p>
            </div>
            <div
                className='trash-style'
                id={id}
                onClick={deleteTask}/>
        </div>
    )
}
