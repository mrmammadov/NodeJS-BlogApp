const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');


router.get('/blogs', blogController.blogs_get);
router.get('/blogs/create', blogController.blogs_create_get);
router.post('/blogs', blogController.blogs_create_post);
router.get('/blog/:id', blogController.blog_detail);
router.delete('/blog/:id', blogController.blog_delete);


module.exports = router;