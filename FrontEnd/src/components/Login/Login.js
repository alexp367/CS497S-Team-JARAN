import React, { Component } from 'react';
import './Login.css';    
import axios from 'axios';

class Login extends Component {    
    async Authenticate (){

        const info = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        }
        const response = await axios.post("http://localhost:5000/events", {
            "event": "LoginAttempt",
            data: info,
        }).catch((err) => {
            console.log(err.message);
        });
        console.log(response);
    }
    
    render() {
        return (
            <div>
                <h1>Login</h1>
                <div class = "card">
                    <div class = "container">
                        <label for="username"><b>Username</b></label>
                        <input type="username" name="username" id="username" class = "ainput" required>
                        </input>

                        <label for="password"><b>Password</b></label>
                        <input type="password" name="password" id="password" class = "ainput" required>
                        </input>

                        <button type="submit" onClick={this.Authenticate}>Login</button>

                        <a href="register">
                            <p>Need to register an account?</p>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;