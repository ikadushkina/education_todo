import { configureStore } from '@reduxjs/toolkit';
import todoSlice, {initialState} from '../app/Containers/TodoList/todoSlice';
import {createStore} from "redux";
import {createConnect} from "react-redux/lib/connect/connect";

function testing( state = initialState.tasks, action){
  switch (action.type) {
    case 'ADD':
      return [...state, { id: action.id, text: action.text, checked: action.checked }]
    case 'CHECK':
        return state.map(item => item.id === action.id ? {...item, checked: !item.checked} : item);
    case 'DEL':
        return state.filter(elem => elem.id !== action.id)
    case 'COMPLETED_ALL':
      return state.map(item => ({...item, checked: true}))
  }
  return state;
}

const store = createStore(testing)



store.subscribe(() => {
  const list = document.querySelector('.list');
  list.innerHTML = '';
  store.getState().forEach(task => {

    const check = document.createElement('input')
    check.type = 'checkbox'
    check.checked = task.checked
    check.id = task.id +'test'

    const p = document.createElement('p');
    p.textContent = task.text;
    p.className = check.checked === true ? 'completed-task' : ''

    const div = document.createElement('div')
    div.className = 'one-task'

    const label = document.createElement('label')
    label.htmlFor = task.id + 'test'

    const del = document.createElement('div')
    del.className = 'trash-style'
    del.id = task.id + 'test'


    div.appendChild(check)
    div.appendChild(label)
    div.appendChild(p)
    div.appendChild(del)
    list.appendChild(div);


    check.addEventListener('click', () =>{
      store.dispatch({ type: 'CHECK', id: task.id })
    })

    del.addEventListener('click', () =>{
      store.dispatch( { type: 'DEL', id: task.id})
    })


  })

  console.log('store:', store.getState());
})

store.dispatch( { type: 'ADD', id: 3, text: 'test dispatch#1', checked: false } )

let id = store.getState()[store.getState().length - 1].id + 1;

const input = document.querySelector('.input-task')

input.addEventListener('keydown', (e) => {
  if(e.keyCode === 13){
    const task = input.value;
    store.dispatch({ type: 'ADD', id: id , text: task, checked: false });
    input.value = '';
    id ++
  }
})

const completedAll = document.querySelector('.completed-all')
completedAll.addEventListener('click', () => {
  store.dispatch({type: 'COMPLETED_ALL'})
})

const reducer = {
  todoSlice: todoSlice,
}
export default configureStore({
  reducer: reducer
});

