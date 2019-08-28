const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors');



const server = express();

mongoose.connect('mongodb+srv://riot_api:IONDOTNLqGqQHSQW@cluster0-a05wx.mongodb.net/riot_api?retryWrites=true&w=majority',{
  useNewUrlParser : true
})


server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);