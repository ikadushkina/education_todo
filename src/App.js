import React from 'react';
import './App.css';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Register from './pages/Register.js'
import TodoList from "./app/Containers/TodoList/TodoList";
import Login from "./pages/Login.js";



function IsLoggedUserMiddleware (Component) {
    return (props)=>{
        console.log('....document.cookie', document.cookie);
        if (document.cookie.includes('token')){
            return <Component {...props}/>
        }
        else{

            return <Redirect to="/login"/>
        }
    }
}

function App() {

    return (
        <div className='App'>
            <header className='App-header'>
                {/*todo place your todo header here */}
                Your todo list
            </header>
            <BrowserRouter>
                <Switch>
                    <Route  component={Login} path='/login'/>
                    <Route component={Register} path="/register"/>
                    <Route exact component={IsLoggedUserMiddleware(TodoList)} path='/'/>
                </ Switch>
            </BrowserRouter>
        </div>
    );
}
export default App;