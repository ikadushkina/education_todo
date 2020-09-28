import React from 'react';

/**
 * todo implement functional component which receive form parent
 * bags - array with names
 * onChange - callback function which should be called with the badge name
 * checked - name of the checked badge
 *
 * you can use more props if needed
 *
 * NOTE: this is component which show the ALL, TODO, Completed bags at the control panel
 *
 */
const RadioBadge = ({checked, onChange, bags }) => {
    return (
        <div className='div-buttons'>
            {bags.map(item => <div key={item}>
                <input type='radio'
                       name='radio'
                       id={item + 'id'}
                       onChange={(e) => onChange(e.target.value)} value={item}
                       checked={item === checked}/>
                <label htmlFor={item + 'id'}>{item}</label>
            </div>)}
        </div>
    );
};
export default RadioBadge;