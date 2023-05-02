/* eslint-disable no-undef */
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const uri = "mongodb+srv://Fjolla:Veiddfl*@mycluster.k3k18zw.mongodb.net/?retryWrites=true&w=majority";

app.get('/hello', (req, res) => {
    res.send('Hello!');
});

app.post('/hello', (req, res) => {
    res.send(`Hello ${req.body.name}`);
});

app.use(cors());
app.use("/products",products);
app.use("/orders",orders);
app.use("/categories",categories);

mongoose.connect(uri)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })




app.listen(8000, () => { console.log("Server started on port 8000"); });



