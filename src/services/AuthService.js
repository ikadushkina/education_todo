import axios from 'axios';



const getUsers=()=>{
    return axios.get('/users')
}
const addUser=(login, password)=>{
    return axios.post('/register', {login, password} )
}

const loginUser=(login, password)=>{
    return axios.post('/login', {login, password} )
}
const verification=()=>{
    return axios.post('/')
}

export default {
    getUsers,
    addUser,
    loginUser,
    verification
}