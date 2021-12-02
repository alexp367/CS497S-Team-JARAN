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

app.post("/get", async (req, res) => {
    const profile = await db.collection("Profiles").find({ "userId": parseInt(req.body.profileId) }).toArray();
    res.send(profile);
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