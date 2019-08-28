const express = require('express')
const SummonerController = require('./controllers/SummonerController');
const DislikeController = require('./controllers/DislikeController');
const LikeController = require('./controllers/LikeController');

const routes = express.Router();

routes.get('/summoner', SummonerController.get);
routes.post('/summoner/:name/like', LikeController.store);
routes.post('/summoner/:name/dislike', DislikeController.store);

module.exports = routes