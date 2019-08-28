const Summoner = require('../models/Summoner')

module.exports = {
  async store(req, res){
    const { name } = req.params;
    const summoner = await Summoner.findOne({summonerName : name});
    if(!summoner){
      return res.json({error : "user not exists"})
    }
    summoner.dislike ++;
    console.log(summoner.dislike)
    await summoner.save();
    return res.json(summoner);
  },

}