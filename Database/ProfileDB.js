const express = require("express")
const app = express();

app.use(express.json());

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://ahickey:MySuperSecretPassword@profiles.wmtxl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let db, collection;

app.post("/save", (req, res) => {
    //Needed because it is for some reason sending 2 post requests upon hitting 'submit', and one of them has all null values
    //TODO: Figure out why it sends 2 post requests and fix it
    if(req.body.myGender == null) {
        res.send("Error with save POST request");
    }
    else {
        collection = db.collection("Profiles");
        const profile = {
            myGender: req.body.myGender,
            preferredGender: req.body.preferredGender,
            myAge: req.body.myAge,
            preferredAge: req.body.preferredAge,
            activities: req.body.activities,
            movies: req.body.movies,
            description: req.body.description
        };

        collection.insertOne(profile, (err) => {
            if(err) {
                res.send("Error with save POST request");
            } else {
                res.send("Profile has been successfully saved");
            }
        });
    }
    
});


client.connect(err => {
    if (err) {
        console.error(err);
    } else {
        const port = process.env.PORT || 3000;
        app.listen(port);
        db = client.db("ProfilesDB");
    }
});