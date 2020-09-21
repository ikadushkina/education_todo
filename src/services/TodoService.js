import axios from 'axios';

const prefix = '/temp-todo';

export default{
    getTasks() {
        return axios.get(prefix)
    },
    addTask(text) {
        return axios.post(prefix +'/add', { text })
    },
    deleteTask(id) {
        return axios.post(prefix + '/delete', { id })
    },
    checkTask(id) {
        return axios.post(prefix + '/check', { id })
    },
    checkAll() {
        return axios.post(prefix + '/check/all/true')
    },
    clearCompleted() {
        return axios.post(prefix + '/check/all/false')
    },
    filterAll() {
        return axios.post(prefix + '/filter/all')
    },
    filterTodo() {
        return axios.post(prefix + '/filter/todo')
    },
    filterCompleted() {
        return axios.post(prefix + '/filter/completed')
    }
}