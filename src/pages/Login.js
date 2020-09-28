import React, {Component} from 'react';
import './style.css'
import {connect} from 'react-redux'
import {loginUser} from "../reducers/loginReducer/actions";

class Login extends Component {

    loginUser = () =>{
        const login = document.getElementById('login').value
        const pass = document.getElementById('password').value
        this.props.login(login, pass, () => this.props.history.push('/'));
    }

    toRegister(){
        this.props.history.push('/register');
    }

    render() {
        return (
            <div>
                <div className={'input-container'}>
                    <h1>LogIn</h1>
                    <input className={'text'} type={'text'} placeholder='Please, enter you login' id='login'/>
                    <input className={'text'} type={'text'} placeholder='and password' id='password'/>
                    <button className={'button'} onClick={() => this.loginUser()} >Log In</button>
                    <button className={'button'} onClick={() => this.toRegister()} >Registration</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => state.loginer;
const mapDispatchToProps = dispatch => ({
    login: (login, password, successCallback) => dispatch(loginUser(login, password, successCallback))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);