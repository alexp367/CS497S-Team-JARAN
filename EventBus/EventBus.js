const express = require("express");
const axios = require("axios");
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post("/events", async (req, res) => {
  const event = req.body.event;
  let db_res;
  console.log(event);

  switch(event){
    case "saveProfile":
      db_res = await axios.post("http://localhost:8001/save", req.body).catch((err) => {
        console.log(err.message);
      });
      break;
    case "getProfile":
      db_res = await axios.post("http://localhost:8001/get", req.body).catch((err) => {
        console.log(err.message);
      });
      break;
    case "updateProfile":
        db_res = await axios.post("http://localhost:8001/update", req.body).catch((err) => {
          console.log(err.message);
        });
        break;
    case "getCommonInterests":
      db_res = await axios.post("http://localhost:3002/getCommonInterests", req.body).catch((err) => {
        console.log(err.message);
      });
      break;
    case "LoginAttempt":
      db_res = await axios.post("http://localhost:8000/events", req.body).catch((err) => {
        console.log(err.message);
      });
      break;
    case "Register":
      db_res = await axios.post("http://localhost:8000/events", req.body).catch((err) => {
        console.log(err.message);
      });
      break;
    case "returnToLogin":
      db_res = await axios.post("http://localhost:3001/events", req.body).catch((err) => {
        console.log(err.message);
      });
      break;
    case "Login":
      db_res = await axios.post("http://localhost:3001/events", req.body).catch((err) => {
        console.log(err.message);
      });
      break;
  }
  res.send(db_res.data);
});

app.listen(5000, () => {
  console.log("Listening on 5000");
});