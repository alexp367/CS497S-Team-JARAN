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
        collection.insertOne(account);
    }

    if (type === "LoginAttempt") {
        const val = collection.find_one({ "username": data.username });

        await axios.post("http://localhost:4000/events", {
            type: "Login",
            data: val,
        });
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