const express = require('express')
const SummonerController = require('./controllers/SummonerController');
const LikeController = require('./controllers/LikeController');

const routes = express.Router();

routes.get('/summoner', SummonerController.get);
routes.post('/summoner/:name/like', LikeController.store);

module.exports = routes