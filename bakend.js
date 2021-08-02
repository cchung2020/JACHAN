const express = require('express');
const app = express();

const testFolder = './blogs/';
const fs = require('fs');


app.get('/', (req, res, next) => {
    res.sendfile('./main.html');
})
app.get('/favicon.png', (req, res, next) => {
    res.sendfile('./favicon.png');
})
app.get('/assets/fonts/fontawesome5-overrides.min.css', (req, res, next) => {
    res.sendfile('./assets/fonts/fontawesome5-overrides.min.css');
})
app.get('/assets/js/theme.js', (req, res, next) => {
    res.sendfile('./assets/js/theme.js');
})
app.get('/assets/css/untitled.css', (req, res, next) => {
    res.sendfile('./assets/css/untitled.css');
})
app.get('/assets/bootstrap/css/bootstrap.min.css', (req, res, next) => {
    res.sendfile('./assets/bootstrap/css/bootstrap.min.css');
})
app.get('/main', (req, res, next) => {
    res.sendfile('./blogs/main.txt');
})
app.get('/f1c100s', (req, res, next) => {
    res.sendfile('./blogs/f1c100s.txt');
})
app.get('/verus', (req, res, next) => {
    res.sendfile('./blogs/verus.txt');
})

app.get('/boost', (req, res, next) => {
    res.sendfile('./blogs/boost.txt');
})
app.get('/infINT', (req, res, next) => {
    res.sendfile('./blogs/infINT.txt');
})


app.listen(8080);