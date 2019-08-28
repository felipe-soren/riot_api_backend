const { Schema, model } = require("mongoose");

const SummonerSchema = new Schema ({
  summonerName:{
    type : String,
    required : true,
  },
  leaguePoints:{
    type : String,
    required : true,
  },
  tier:{
    type : String,
    required : true,
  },
  rank:{
    type : String,
    required : true,
  },
  wins:{
    type : String,
    required : true,
  },
  losses:{
    type : String,
    required : true,
  },
  like:{
    type : Number,
    required : true,
  },
  dislike:{
    type : Number,
    required : true,
  }
}, {
  timestamps : true
});

module.exports = model('Summoner', SummonerSchema);