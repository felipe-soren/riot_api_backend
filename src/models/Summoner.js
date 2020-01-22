const { Schema, model } = require("mongoose");

const SummonerSchema = new Schema ({
  summonerId:{
    type : String,
    required : true,
  },
  like:{
    type : Number,
    default: 0,
    required : true,
  },
  dislike:{
    type : Number,
    default: 0,
    required : true,
  }
}, {
  timestamps : true
});

module.exports = model('Summoner', SummonerSchema);