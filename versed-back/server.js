/* eslint-disable no-undef */
const express = require('express');
const mongoose = require('mongoose');
const app = express();


const uri = "mongodb+srv://Fjolla:Veiddfl*@mycluster.k3k18zw.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(uri)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })


app.listen(8000, () => { console.log("Server started on port 8000"); });

// var port = process.env.port || 4000;

// app.listen(port, function(){
//     console.log("Online on port " + port);
// });

