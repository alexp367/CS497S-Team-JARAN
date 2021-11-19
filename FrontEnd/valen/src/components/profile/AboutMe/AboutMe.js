import React, { Component } from 'react';
import './AboutMe.css';
const axios = require("axios");

const interests = [];

class AboutMe extends Component {
    async saveProfile() {
        const profile = {"myGender": document.getElementById("myGender").value,
                     "preferredGender": document.getElementById("preferredGender").value,
                     "myAge": document.getElementById("myAge").value,
                     "preferredAge": document.getElementById("preferredAge").value,
                     "interests": interests,
                     "description": document.getElementById("description").value,
                    };
        const eb_res = await axios.post("http://localhost:5000/events", {
            "event": "saveProfile",
            "profile": profile
        }).catch((err) => {
            console.log(err.message);
        });
    }

    addInterest() {
        interests.push(document.getElementById("interests").value);
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <h3>About Me</h3>
                        <form class="form-inline">
                            <label for="myGender">I am </label>
                            <select name="myGender" id="myGender">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            <label for="preferredGender"> Looking for </label>
                            <select name="preferredGender" id="preferredGender">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Both">Both</option>
                                <option value="Other">Other</option>
                            </select>
                            <textarea name="description" id="description" class="description" cols="90" rows="6" maxLength="200" placeholder="In my own words..."></textarea>
                            <br></br>
                            <label for="myAge">I am </label>
                            <input type="number" id="myAge" name="myAge" min="18"></input> years old,
                            <label for="preferredAge"> looking for someone within </label>
                            <input type="number" id="preferredAge" name="preferredAge" min="0"></input> years of my age
                            <br></br>
                            <label for="interests">Interests </label>
                            <select name="interests" id="interests" onChange={this.addInterest}>
                                <option value="Basketball">Basketball</option>
                                <option value="Football">Football</option>
                                <option value="Baseball">Baseball</option>
                                <option value="Hockey">Hockey</option>
                                <option value="Soccer">Soccer</option>
                            </select>
                            <br></br>
                            <br></br> 


                            <br></br><br></br>
                            <input type="submit" value="Save" onClick={this.saveProfile}></input>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;