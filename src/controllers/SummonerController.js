const Summoner = require("../models/Summoner");
const Api = require("../services/api");
const API_KEY = "RGAPI-9a06838c-3c12-4410-a7a1-416c01ba69b0";

module.exports = {
  async show(req, res) {
    console.log(req.params.name)
    try {
      console.log(escape(req.params.name))
      const responseId = await Api.get(`/summoner/v4/summoners/by-name/${encodeURIComponent(req.params.name)}?api_key=${API_KEY}`)
      const { id: summonerId } = responseId.data
      const responseInfo = await Api.get(`/league/v4/entries/by-summoner/${summonerId}?api_key=${API_KEY}`)
      const responseMastery = await Api.get(`/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}?api_key=${API_KEY}`)
      console.log(responseMastery.data[0].championId)
      let summoner = await Summoner.findOne({ summonerId })
      if (!summoner) {
        summoner = await Summoner.create({ summonerId })
      }
      console.log({...responseInfo.data, ...summoner._doc})
      res.json({...summoner._doc, ...responseInfo.data, ...responseId.data, 
        championMainId: responseMastery.data[0].championId})
    } catch (error) {
      res.send(404)
    }
  }
};
