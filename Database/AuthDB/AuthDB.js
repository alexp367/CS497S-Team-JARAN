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
    collection = db.collection("Users");
    
    if (event === "Register") {
        const id = await collection.count()+1;
        const account = {
            username: data.username,
            password: data.password,
            userId: id
        }
        const profile = {
            userId: id,
            firstName: data.username,
            gender: "Male",
            genderPreference: "Male",
            age: 18,
            ageGapPreference: 0,
            description: "",
            interests: [],
            swipedRight: [],
            matches: []
        };
        let val;
        try{
            val = await collection.find({ "username": data.username }).toArray();
        } catch(err){
            console.log(err);
        }
        
        if(val.length === 0){
            collection.insertOne(account, (err) => {
                if(err) {
                    res.send("Error registering account");
                }
            });
            await axios.post("http://localhost:5000/events", {
                "event": "saveProfile",
                profile: profile,
            }).catch((err) => {
                console.log(err.message);
            });
            await axios.post("http://localhost:5000/events", {
                "event": "returnToLogin",
                data: account,
            }).catch((err) => {
                console.log(err.message);
            });
        }
        else{
            res.send("Username already in use");
        }
        res.send({});
    }

    if (event === "LoginAttempt") {
        let val;
        try{
            val = await collection.find({ "username": data.username }).toArray();
        } catch(err){
            console.log(err);
        }

        if(val.length === 0){
            res.send("Username not found");
        }
        else if(val[0].password !== data.password){
            res.send("Password not correct");
        }
        else{
            console.log("Succesfully logged into your account");
            await axios.post("http://localhost:5000/events", {
                "event": "Login",
                "data": val[0],
            }).catch((err) => {
                console.log(err.message);
            });
            res.send(JSON.stringify({"userId": val[0].userId}));
        }
    }
});

client.connect(err => {
    if(!err) {
        const port = process.env.PORT || 8000;
        app.listen(port);
        db = client.db("AuthDB");
    }
});