const Summoner = require("../models/Summoner");

module.exports = {
  async store(req, res) {
    const { name } = req.params;
    console.log(name);
    const summoner = await Summoner.findOne({ summonerName: name });
    console.log(summoner);
    if (!summoner) {
      return res.json({ error: "user not exists" });
    }

    summoner.dislike++;
    await summoner.save();
    return res.json(summoner);
  }
};
