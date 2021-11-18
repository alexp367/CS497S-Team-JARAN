import React, { Component } from 'react';
import './Login.css';    
import axios from 'axios';

class Register extends Component {    
    async Registration(){
        console.log("test");
        const info = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        }
        await axios.post("http://localhost:5000/events", {
            type: "Register",
            data: info,
        });
    }
    
    render() {
        return (
            <div>
                <form>
                    <h1>Register</h1>
                    <div class = "card">
                        <div class = "container">
                            <label for="username"><b>Username</b></label>
                            <input type="username" name="username" id="username" required>
                            </input>   

                            <label for="password"><b>Password</b></label>
                            <input type="password" name="password" id="password" required>
                            </input>

                            <button type="submit" onClick={this.Registration}>Register</button>

                            <a href="login">
                                <p>Already registered?</p>
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;