const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')

const server = express();

mongoose.connect('mongodb+srv://riot_api:IONDOTNLqGqQHSQW@cluster0-a05wx.mongodb.net/riot_api?retryWrites=true&w=majority',{
  useNewUrlParser : true
})

server.use(express.json());

server.listen(3333);

server.use(routes);