const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');
const middleware = require('../middleware/auth');
const images = require('../helpers/images')

/* GET home page. */
router.get('/', articleController.getAll);
router.get('/:id', articleController.getOne);
router.get('/by/:category', articleController.getByCategory)
router.get('/author', articleController.getByAuthor)
router.post('/post', middleware.isUser, images.multer.single('image'), images.sendUploadToGCS, articleController.postArticle);
router.put('/edit/:id', middleware.isUser, articleController.editArticle);
router.delete('/delete/:id', middleware.isUser, articleController.deleteArticle);

module.exports = router;