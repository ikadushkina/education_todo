import React from 'react';
import './TodoItem.scss';

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
export default function TodoItem({handleChange, id, isCompleted, text, deleteTask}) {
    return (
        <div className='task'>
            <div className='one-task'>
                <input
                    type='checkbox'
                    key={id}
                    id={id}
                    checked={isCompleted}
                    onChange={handleChange}
                    className={isCompleted ? 'check-checked':''}
                /><label htmlFor={id}/>
                <p className={isCompleted ? 'completed-task':''}>{text}</p>
            </div>
            <div
                className='trash-style'
                id={id}
                onClick={deleteTask}
            />
        </div>
    )
}
