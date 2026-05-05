const express = require('express');
const cors = require('cors');
const path = require('path');

const chatRoutes = require('./routes/chatRoutes');

const app = express();

app.use(cors());
app.use(express.json()); // permiti receber o json 
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/chat', chatRoutes); // toda rota comecando com /chat vai para chatRoutes

module.exports = app;
