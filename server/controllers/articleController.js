const users = require('../models/users');
const articles = require('../models/articles');
const jwt = require('jsonwebtoken');

module.exports = {
  getAll: function (req, res) {
    articles.find({})
      .populate('user')
      .then(article => {
        res.status(200).json({
          data: article
        })
      })
  },
  getOne: function (req, res) {
    articles.findById(req.params.id)
      .populate('user')
      .then(article => {
        res.status(200).json({
          data: article
        })
      })
  },
  getByCategory: function (req, res) {
    articles.find({ category: req.params.category })
    .populate('user')
      .then(article => {
        res.status(200).json({
          data: article
        })
      })
  },
  getByAuthor: function (req, res) {
    articles.find({ category: req.body.author })
    .populate('user')
      .then(article => {
        res.status(200).json({
          data: article
        })
      })
  },
  postArticle: function (req, res) {
    let token = req.headers.token;

    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      let newArticle = new articles({
        author: decoded.id,
        title: req.body.title,
        content: req.body.content,
        category: req.body.category
      })

      newArticle.save((err, result) => {
        if(err) {
          console.log(err);
        } else {
          res.status(201).json({
            message: 'successfully added a new article !',
            data: result
          })
        }
      })
    })
  },
  editArticle: function (req, res) {
    articles.findByIdAndUpdate({ _id: req.params.id }, {
      title: req.body.title,
      content: req.body.content,
      category: req.body.category
    })
    .then(update => {
      res.status(200).json({
        message: `berhasil mengubah data`,
        data: update
      })
    })
  },
  deleteArticle: function (req, res) {
    articles.findByIdAndRemove({ _id: req.params.id })
    .then(deleted => {
      res.status(200).json({
        message: `berhasil menghapus data`,
        data: deleted
      })
    })
  }
}