import axios from 'axios';

export default {
    getTasks() {
        return axios.get('/tasks')
    },
    addTask(text) {
        return axios.post('/add', {text})
    },
    deleteTask(id) {
        return axios.post('/delete', {id})
    },
    checkTask(id) {
        return axios.post('/check', {id})
    },

    register(login, pass){
        return axios.post('/registered', {login, pass})
    }
}
