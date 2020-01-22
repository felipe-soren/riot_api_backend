const { Schema, model } = require("mongoose");

const CommentSchema = new Schema ({
  userName: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  avatarUrl: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  summonerId: {
    type: String,
    required: true
  }
}, {
  timestamps : true
});

module.exports = model('Comment', CommentSchema);