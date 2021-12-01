import React, { Component } from 'react';
import './Login.css';    
import axios from 'axios';

class Register extends Component {    
    async Registration(){
        const info = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        }
        await axios.post("http://localhost:5000/events", {
            "event": "Register",
            data: info,
        }).catch((err) => {
            console.log(err.message);
        });
    }
    
    render() {
        return (
            <div>
                <h1>Register</h1>
                <div class = "card">
                    <div class = "container">
                        <label for="username"><b>Username</b></label>
                        <input type="username" name="username" id="username" class = "ainput" required>
                        </input>   

                        <label for="password"><b>Password</b></label>
                        <input type="password" name="password" id="password" class = "ainput" required>
                        </input>

                        <button type="submit" onClick={this.Registration}>Register</button>

                        <a href="login">
                            <p>Already registered?</p>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;