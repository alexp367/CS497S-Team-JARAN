import React, { Component } from 'react';
import './AboutMe.css';

class AboutMe extends Component {
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
                            <br></br>
                            <label for="myAge">I am </label>
                            <input type="number" id="myAge" name="myAge" min="18"></input> years old,
                            <label for="desiredAge"> looking for someone within </label>
                            <input type="number" id="desiredAge" name="desiredAge" min="0"></input> years of my age

                            <br></br><br></br>
                            <input type="submit" value="Save"></input>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;