import React, { Component } from 'react';
import './ProfilePicture.css';

class ProfilePicture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null
        };
        this.onImageChange = this.onImageChange.bind(this);
    }

    onImageChange = event => {
        if(event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
                image: URL.createObjectURL(img)
            });
        }
    };

    render() {
        return (
            <div>
                <div>
                    <div>
                        <img src={this.state.image} />
                        <h1>Upload Image</h1>
                        <input type="file" name="pfp" onChange={this.onImageChange} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfilePicture;