const axios = require('axios');
const Summoner = require('../models/Summoner');

module.exports = {
  async get(req, res){
    const { name } = req.body;
    console.log(name)
    const responseSummonerid = await axios.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=RGAPI-6bdbcd01-5c42-46ab-b14f-ec3eb3c27f85`)
                                          .catch(error => console.log(error),
                                          this.responseSummonerid = []) 
    if (!responseSummonerid){
      return res.json({error: 'user not exists'});
    }

    
    const summonerExists = await Summoner.findOne({ summonerName : name });

    if (summonerExists){
      return res.json(summonerExists)
    }

    const { id } = responseSummonerid.data
    const response = await axios.get(`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=RGAPI-6bdbcd01-5c42-46ab-b14f-ec3eb3c27f85`)

    const { leaguePoints, tier, rank, wins, losses } = response.data[0];
    
    const summoner = await Summoner.create({
      summonerName: name,
      leaguePoints,
      tier,
      rank,
      wins,
      losses,
      like : 0,
      dislike : 0
    })
    console.log(response.data[0])
    return res.json(summoner);
  }
}
