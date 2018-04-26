const mongoose = require('mongoose');

let articleSchema = mongoose.Schema({
  title: String,
  content: String,
  category: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  image: String
},{
  timestamps: true
})

let article = mongoose.model('article', articleSchema)

module.exports = article;