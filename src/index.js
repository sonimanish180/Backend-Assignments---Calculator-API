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
    res.send("Hello world!");
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

    
    if (num1>1000000 || num2>1000000) {
        response.status = "error";
        response.message = "Overflow";
        res.send(response);
        return;
    }

    if (num1<-1000000 || num2<-1000000) {
        response.status = "error";
        response.message = "Underflow";
        res.send(response);
        return;
    }

    if (typeof(num1) === "string" || typeof(num2) === "string") {
        response.status = "error";
        response.message = "Invalid data types";
        res.send(response);
        return;
    }

    if (sum>1000000) {
        response.status = "error";
        response.message = "Overflow";
        res.send(response);
        return;
    }

    if (sum<-1000000) {
        response.status = "error";
        response.message = "Underflow";
        res.send(response);
        return;
    }


    response.status = "success";
    response.message = "the sum of given two numbers";
    response.sum = sum;
    console.log(req.body);
    res.send(response);
});

app.post('/sub', (req, res) => {

    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let difference = parseFloat(num1) -  parseFloat(num2);

    let response = {};
    
    if (num1>1000000 || num2>1000000) {
        response.status = "error";
        response.message = "Overflow";
        res.send(response);
        return;
    }

    if (num1<-1000000 || num2<-1000000) {
        response.status = "error";
        response.message = "Underflow";
        res.send(response);
        return;
    }

    if (typeof(num1) === "string" || typeof(num2) === "string") {
        response.status = "error";
        response.message = "Invalid data types";
        res.send(response);
        return;
    }

    if (difference>1000000) {
        response.status = "error";
        response.message = "Overflow";
        res.send(response);
        return;
    }

    if (difference<-1000000) {
        response.status = "error";
        response.message = "Underflow";
        res.send(response);
        return;
    }


    response.status = "success";
    response.message = "the difference of given two numbers";
    response.difference = difference;
    console.log(req.body);
    res.send(response);
});

app.post('/multiply', (req, res) => {

    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let result = parseFloat(num1)*parseFloat(num2);

    let response = {};
    
    if (num1>1000000 || num2>1000000) {
        response.status = "error";
        response.message = "Overflow";
        res.send(response);
        return;
    }

    if (num1<-1000000 || num2<-1000000) {
        response.status = "error";
        response.message = "Underflow";
        res.send(response);
        return;
    }

    if (typeof(num1) === "string" || typeof(num2) === "string") {
        response.status = "error";
        response.message = "Invalid data types";
        res.send(response);
        return;
    }

    if (difference>1000000) {
        response.status = "error";
        response.message = "Overflow";
        res.send(response);
        return;
    }

    if (difference<-1000000) {
        response.status = "error";
        response.message = "Underflow";
        res.send(response);
        return;
    }


    response.status = "success";
    response.message = "The product of given numbers";
    response.result = result;
    console.log(req.body);
    res.send(response);
});

app.post('/divide', (req, res) => {

    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if (parseFloat(num2) === 0) {
        response.status = "error";
        response.message = "Cannot divide by zero";
        res.send(response);
        return;
    }

    let result = parseFloat(num1)/parseFloat(num2);

    let response = {};
    
    if (num1>1000000 || num2>1000000) {
        response.status = "error";
        response.message = "Overflow";
        res.send(response);
        return;
    }

    if (num1<-1000000 || num2<-1000000) {
        response.status = "error";
        response.message = "Underflow";
        res.send(response);
        return;
    }

    if (typeof(num1) === "string" || typeof(num2) === "string") {
        response.status = "error";
        response.message = "Invalid data types";
        res.send(response);
        return;
    }

    if (difference>1000000) {
        response.status = "error";
        response.message = "Overflow";
        res.send(response);
        return;
    }

    if (difference<-1000000) {
        response.status = "error";
        response.message = "Underflow";
        res.send(response);
        return;
    }


    response.status = "success";
    response.message = "The product of given numbers";
    response.result = result;
    console.log(req.body);
    res.send(response);
});

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;