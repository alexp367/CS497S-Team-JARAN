const express = require('express')
const app = express()
const server = require('http').createServer(app)
const port = process.env.PORT || 3002

app.use(express.json());

app.post('/getCommonInterests', (req, res) => {
    const interest_1 = req.body.interests1.sort();
    const interest_2 = req.body.interests2.sort();
    const common_interest = [];
    let i = 0;
    let j = 0;
    while(i < interest_1.length && j < interest_2.length){
        if(interest_1[i] === interest_2[j]){
            common_interest.push(interest_1[i]);
            i++;
            j++;
        }
        else if(interest_1[i] > interest_2[j]){
            j++;
        }
        else{
            i++;
        }
    }
    res.status(200).send(common_interest)
});

server.listen(port, () => {
    console.log("Listening on " + port);
});