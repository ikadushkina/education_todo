import React from 'react';
import './style.css'
import {connect} from 'react-redux'
import {register} from "../reducers/registerReduser/actions";


export class Register extends React.Component {

    registerUser(){
        const login = document.getElementById('login').value
        const pass = document.getElementById('password').value
        this.props.registration(login, pass)
        this.props.history.push('/');
    }

    toLogin() {
        this.props.history.push('/login');
    }


    render() {
        console.log("this.props.location",this.props.location)

        return (
            <div>
                <div className={'input-container'}>
                    <h1>Register</h1>
                    <input className={'text'} type={'text'} placeholder='Please, enter you login' id='login'/>
                    <input className={'text'} type={'text'} placeholder='and password' id='password'/>
                    <button onClick={() => this.registerUser()} className={'button'}>Register me</button>
                    <button onClick={() => this.toLogin()} className={'button'}>Log In</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => state.register;
const mapDispatchToProps = dispatch => ({
    registration: (login, password) => dispatch(register(login, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);