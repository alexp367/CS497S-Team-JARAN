const express = require("express")
const app = express();
const axios = require('axios');

app.use(express.json());

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://ahickey:MySuperSecretPassword@profiles.wmtxl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let db, collection;

app.post("/events", async (req, res) => {
    const { event, data } = req.body;
    
    if (event === "Register") {
        collection = db.collection("Users");
        let value = await collection.count();
        const account = {
            username: data.username,
            password: data.password,
            id: value + 1,
            firstName: null,
            gender: null,
            genderPreference: null,
            age: null,
            ageGapPreference: null,
            description: null,
            interests: null,
            swipedRight: null,
            matches: null
        };
        let val;
        try{
            val = await collection.find({ "username": data.username }).toArray();
        } catch(err){
            console.log(err);
        }
        
        if(!val[0]){
            collection.insertOne(account, (err) => {
                if(err) {
                    res.send("Error registering account");
                }
            });

            await axios.post("http://localhost:5000/events", {
                "event": "returnToLogin",
                data: account,
            }).catch((err) => {
                console.log(err.message);
            });
        }
        else{
            console.log("Username already in use");
        }
    }

    if (event === "LoginAttempt") {
        let val;
        try{
            val = await collection.find({ "username": data.username }).toArray();
        } catch(err){
            console.log(err);
        }
   
        if(val[0].password == data.password){
            console.log("Succesfully logged into your account");
            await axios.post("http://localhost:5000/events", {
                "event": "Login",
                data: data,
            }).catch((err) => {
                console.log(err.message);
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
        const port = process.env.PORT || 8000;
        app.listen(port);
        db = client.db("AuthDB");
    }
});