const axios = require("axios");
const Summoner = require("../models/Summoner");
const api = require("../services/api");

module.exports = {
  async get(req, res) {
    const { name } = req.body;
    const API_KEY = "RGAPI-9a06838c-3c12-4410-a7a1-416c01ba69b0";
    let summonerId = "";
    try {
      const responseSummonerid = await api.get(
        `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=RGAPI-9a06838c-3c12-4410-a7a1-416c01ba69b0`
      );
      summonerId = responseSummonerid;
      console.log(summonerId);
    } catch (err) {
      console.log(err);
      return res.sendStatus(404);
    }

    const summonerExists = await Summoner.findOne({ summonerName: name });

    if (summonerExists) {
      return res.json(summonerExists);
    } else {
      const { id } = summonerId.data;
      const response = await api.get(
        `/league/v4/entries/by-summoner/${id}?api_key=${API_KEY}`
      );
      const { leaguePoints, tier, rank, wins, losses } = response.data[0];
      const summoner = await Summoner.create({
        summonerName: name,
        leaguePoints,
        tier,
        rank,
        wins,
        losses,
        like: 0,
        dislike: 0
      });
      return res.json(summoner);
    }
  }
};
