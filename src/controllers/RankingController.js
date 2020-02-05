const Api = require("../services/api");
const API_KEY = "RGAPI-9a06838c-3c12-4410-a7a1-416c01ba69b0";

class RankingController {
  async index (req, res) {
    try {
      const response = await Api.get(`league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=${API_KEY}`)

      let ranking = response.data.entries

      ranking.sort((a, b)=>{
        if (a.leaguePoints < b.leaguePoints) {
          return 1;
        }
        if (a.leaguePoints > b.leaguePoints) {
          return -1;
        }
        return 0;
      })

      res.json(ranking.slice(0, 100))
    } catch (error) {
      res.send(404)
    }
  }
}

module.exports = new RankingController();