const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');


const server = express();
//const routes = express.Router('./controllers/DevController');

// conexão com o o banco
mongoose.connect('mongodb+srv://Melquias:melquias10@cluster0-dks45.mongodb.net/app?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true
});
server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);



    
