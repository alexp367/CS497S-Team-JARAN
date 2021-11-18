import React, { Component } from 'react';
import './Login.css';    
import axios from 'axios';

class Login extends Component {    
    async Authenticate (){

        const info = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        }
        await axios.post("http://localhost:5000/events", {
            type: "LoginAttempt",
            data: info,
        });
    }
    
    render() {
        return (
            <div>
                <form>
                    <h1>Login</h1>
                    <div class = "card">
                        <div class = "container">
                            <label for="username"><b>Username</b></label>
                            <input type="username" name="username" id="username" required>
                            </input>

                            <label for="password"><b>Password</b></label>
                            <input type="password" name="password" id="password" required>
                            </input>

                            <button type="submit" onClick={this.Authentication}>Login</button>

                            <a href="register">
                                <p>Need to register an account?</p>
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;