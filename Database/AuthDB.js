const express = require("express")
const app = express();
const axios = require('axios');

app.use(express.json());

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://ahickey:MySuperSecretPassword@profiles.wmtxl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let db, collection;

app.post("/events", async (req, res) => {
    const { type, data } = req.body;
    collection = db.collection("Users");
    
    if (type === "Register") {
        const account = {
            username: data.username,
            password: data.password
        };
        const val = collection.find_one({ "username": data.username });
        if(val){
            collection.insertOne(account);
            console.log("Succesfully registered your account");

            await axios.post("http://localhost:5000/events", {
                type: "returnToLogin",
                data: val,
            });
        }
        else{
            console.log("Username already in use");
        }
    }

    if (type === "LoginAttempt") {
        const val = collection.find_one({ "username": data.username });
        if(val){
            console.log("Succesfully logged into your account");
            await axios.post("http://localhost:5000/events", {
                type: "Login",
                data: val,
            });
        }
        else{
            console.log("Username not found");
        }
    
    }

    res.send({});
});

client.connect(err => {
    if(!err) {
        const port = process.env.PORT || 4000;
        app.listen(port);
        db = client.db("AuthDB");
    }
});