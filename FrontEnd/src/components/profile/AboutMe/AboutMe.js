import React, { Component } from 'react';
import './AboutMe.css';
const axios = require("axios");

let interests = [];

async function getProfile(){
    console.log(window.sessionStorage.getItem("userId"));
    const res = await axios.post("http://localhost:5000/events", {
        "event": "getProfile",
        "userId": window.sessionStorage.getItem("userId")
      }).catch((err) => {
        console.log(err);
      });
    document.getElementById("myGender").value = res.data.gender;
    document.getElementById("preferredGender").value = res.data.genderPreference;
    document.getElementById("description").value = res.data.description;
    document.getElementById("myAge").value = res.data.age;
    document.getElementById("preferredAge").value = res.data.ageGapPreference;
    for(let i = 0;i < res.data.interests.length;i++){
        document.getElementById(res.data.interests[i]).checked = true;
        if(interests.indexOf(res.data.interests[i]) === -1){
            interests.push(res.data.interests[i]);
        }
    }
    interests.sort();
}

class AboutMe extends Component {
    async saveProfile() {
        console.log(window.sessionStorage.getItem("userId"));
        const profile = {"userId": window.sessionStorage.getItem("userId"),
                    "gender": document.getElementById("myGender").value,
                     "genderPreference": document.getElementById("preferredGender").value,
                     "age": document.getElementById("myAge").value,
                     "ageGapPreference": document.getElementById("preferredAge").value,
                     "interests": interests,
                     "description": document.getElementById("description").value,
                    };
        const eb_res = await axios.post("http://localhost:5000/events", {
            "event": "updateProfile",
            "profile": profile
        }).catch((err) => {
            console.log(err.message);
        });
    }

    updateInterests() {
        interests = [];
        for(let i = 0;i < document.getElementById("interests").children.length;i += 3){
            if(document.getElementById("interests").children[i].checked){
                interests.push(document.getElementById("interests").children[i].value);
            }
        }
        interests.sort();
    }

    render() {
        const object = (
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
                            <label>Interests </label>
                            <br></br>
                            <div id="interests">
                                <input type="checkbox" id="Basketball" value="Basketball" onChange={this.updateInterests}></input>
                                <label>  Basketball</label>
                                <br></br>
                                <input type="checkbox" id="Football" value="Football" onChange={this.updateInterests}></input>
                                <label>  Football</label>
                                <br></br>
                                <input type="checkbox" id="Baseball" value="Baseball" onChange={this.updateInterests}></input>
                                <label>  Baseball</label>
                                <br></br>
                                <input type="checkbox" id="Hockey" value="Hockey" onChange={this.updateInterests}></input>
                                <label>  Hockey</label>
                                <br></br>
                                <input type="checkbox" id="Soccer" value="Soccer" onChange={this.updateInterests}></input>
                                <label>  Soccer</label>
                                <br></br>
                            </div>
                            <br></br> 


                            <br></br><br></br>
                            <input type="submit" value="Save" onClick={this.saveProfile}></input>
                        </form>
                    </div>
                </div>
            </div>
        );
        getProfile();
        return object;
    }
}

export default AboutMe;