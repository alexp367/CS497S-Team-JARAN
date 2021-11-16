const express = require("express");

//express
const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

//express body-parser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.set('query parser', 'simple');

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
  
app.get('/',(req,res) => {
    //let shorturl='';
    res.send()
  })