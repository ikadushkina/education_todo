import React from 'react';

export default function ToDoInput({addTask, value, onChange}){
    return(
    <div className='div-input'>
        <input type='text'
               value={value}
               id='input-text'
               className='text-input'
               placeholder='Enter your task name here'
               onChange={onChange}
               onKeyPress={addTask}
        />
    </div>
    )
}