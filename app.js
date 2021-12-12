const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./Router/index');

const app = express();

const host = '0.0.0.0';
const port =process.env.PORT || 2001;
//const dbUrl = 'mongodb://127.0.0.1:27017/zomato_17';
const serverDBURL = 'mongodb+srv://zomato123:achi123@cluster0.fdn1u.mongodb.net/zomato?retryWrites=true&w=majority';

// CORS - Cross Origin Resource Sharing
app.use(cors());
app.options('*', cors());

app.use(express.json());

app.use('/', router);

mongoose.connect(serverDBURL, {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then(res => {
        app.listen(port, host, () => {
            console.log(`Server is Running at ${host}:${port}`)
        });
    })
    .catch(err => console.log(err));

