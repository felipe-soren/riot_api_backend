const express = require('express')
const SummonerController = require('./controllers/SummonerController');
const DislikeController = require('./controllers/DislikeController');
const LikeController = require('./controllers/LikeController');
const CommentController = require('./controllers/CommentController');
const SummonerCheckController = require('./controllers/SummonerChekController');
const RankingController = require('./controllers/RankingController');

const routes = express.Router();

routes.get('/summoner/:name', SummonerController.show);
routes.get('/summonercheck/:name', SummonerCheckController.show);
routes.post('/summoner/:summonerId/like', LikeController.store);
routes.post('/summoner/:summonerId/dislike', DislikeController.store);
routes.post('/comment', CommentController.store);
routes.get('/comment/:summonerId', CommentController.show);
routes.get('/ranking', RankingController.index)

module.exports = routes
