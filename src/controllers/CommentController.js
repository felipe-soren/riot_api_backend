const Comment = require('../models/Comment')

class CommentController {

  async store(req, res) {
    const comment = await Comment.create(req.body)
    res.json(comment)
  }

  async show (req, res) {
    const comments = await Comment.find({ summonerId: req.params.summonerId }).sort({createdAt: 'desc'})
    res.json(comments)
  }
}

module.exports = new CommentController()