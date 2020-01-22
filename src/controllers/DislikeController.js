const Summoner = require("../models/Summoner");

module.exports = {
  async store(req, res) {
    console.log(req.params);
    const summoner = await Summoner.findOne({ summonerId: req.params.summonerId });
    summoner.dislike++;
    await summoner.save();
    return res.json(summoner);
  }
};
