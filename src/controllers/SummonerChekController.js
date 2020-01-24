const Api = require("../services/api");
const API_KEY = "RGAPI-9a06838c-3c12-4410-a7a1-416c01ba69b0";

module.exports = {
  async show(req, res) {
    try {
      const response = await Api.get(`/summoner/v4/summoners/by-name/${encodeURIComponent(req.params.name)}?api_key=${API_KEY}`)
      res.send(response.data)
    } catch (error) {
      res.send(404)
    }
  }
};
