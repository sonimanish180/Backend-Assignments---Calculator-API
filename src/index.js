const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get('/', (req, res) => {
    res.status(200).send("Hello world!");
});

app.post('/add', (req, res) => {

    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let sum = parseFloat(num1) +  parseFloat(num2);

    let response = {};

    // if (!req.body.num1 || !req.body.num2) {
    //     response.status = "failure";
    //     res.send(response);
    //     return;
    // }

    if (typeof(num1) === "string" || typeof(num2) === "string") {
        response.status = "error";
        response.message = "Invalid data types";
        res.status(400).send(response);
        return;
    }

    if (num1>1000000 || num2>1000000) {
        response.status = "error";
        response.message = "Overflow";
        res.status(400).send(response);
        return;
    }

    if (num1<-1000000 || num2<-1000000) {
        response.status = "error";
        response.message = "Underflow";
        res.status(400).send(response);
        return;
    }

    if (sum>1000000) {
        response.status = "error";
        response.message = "Overflow";
        res.status(400).send(response);
        return;
    }

    if (sum<-1000000) {
        response.status = "error";
        response.message = "Underflow";
        res.status(400).send(response);
        return;
    }


    response.status = "success";
    response.message = "the sum of given two numbers";
    response.sum = sum;
    console.log(req.body);
    res.status(200).send(response);
});

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;