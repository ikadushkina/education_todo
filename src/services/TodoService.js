import axios from 'axios';

const prefix = '/temp-todo';

export default{
    getTasks() {
        return axios.get('/tasks')
    },
    addTask(text) {
        return axios.post('/add', { text })
    },
    deleteTask(id) {
        return axios.post('/delete', { id })
    },
    checkTask(id) {
        return axios.post('/check', { id })
    }
}