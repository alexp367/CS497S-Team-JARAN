const express = require("express");
const axios = require("axios");
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post("/events", async (req, res) => {
  const event = req.body.event;
  let db_res;

  switch(event){
    case "saveProfile":
      db_res = await axios.post("http://localhost:8000/save", req.body).catch((err) => {
        console.log(err.message);
      });
      break;
    case "getProfile":
      db_res = await axios.post("http://localhost:8000/get", req.body).catch((err) => {
        console.log(err.message);
      });
      break;
    case "getCommonInterests":
      db_res = await axios.post("http://localhost:3002/getCommonInterests", req.body).catch((err) => {
        console.log(err.message);
      });
      break;
  }

  res.send(db_res.data);
});

app.listen(5000, () => {
  console.log("Listening on 5000");
});