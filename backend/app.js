const express = require('express');
const cors = require('cors');
const {db} = require('./db/db');
const {readdirSync} = require('fs');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT;

// middlewares
app.use(express.json());
app.use(cors());

// routes
readdirSync('backend/routes').map((route) => app.use('/api/v1', require('backend/routes/' + route)));
// readdirSync('./routes').map((route) => app.use('https://expense-tracker-eight-iota.vercel.app/', require('./routes/' + route)));

const server = () => {
    db();
    app.listen(PORT, () => {
        console.log('You are listening to port:', PORT);
    })
}

server();
