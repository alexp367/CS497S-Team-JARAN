const express = require("express")
const app = express();

app.use(express.json());

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://ahickey:MySuperSecretPassword@profiles.wmtxl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let db;

app.post("/save", async (req, res) => {
    await db.collection("Profiles").insertOne(req.body.profile, (err) => {
        if(err) {
            res.send("Error saving profile");
        }
    });
    res.send("Profile has been successfully saved");
});

app.post("/update", async (req, res) => {
    const profile = await db.collection("Profiles").find({ "userId": parseInt(req.body.profile.userId) }).toArray();
    const newProfile = {
        userId: profile[0].userId,
        firstName: profile[0].firstName,
        gender: req.body.profile.gender,
        genderPreference: req.body.profile.genderPreference,
        age: req.body.profile.age,
        ageGapPreference: req.body.profile.ageGapPreference,
        description: req.body.profile.description,
        interests: req.body.profile.interests,
        swipedRight: profile[0].swipedRight,
        matches: profile[0].matches,
    }
    await db.collection("Profiles").deleteMany({ "userId": parseInt(req.body.profile.userId) });
    await db.collection("Profiles").insertOne(newProfile, (err) => {
        if(err) {
            res.send("Error saving profile");
        }
    });
    res.send("Profile has been successfully updated");
});

app.post("/get", async (req, res) => {
    const profile = await db.collection("Profiles").find({ "userId": parseInt(req.body.userId) }).toArray();
    res.send(profile[0]);
});

client.connect(err => {
    if(!err) {
        const port = process.env.PORT || 8001;
        app.listen(port, () => {
            console.log("Listening on " + port);
        });
        db = client.db("ProfilesDB");
    }
});