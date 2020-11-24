const Blog = require('../models/blogs');

const blogs_get = (req, res) => {
    Blog.find()
        .then((result) => {
            res.render('index', {title: 'Home Page', blogs:result})
        })
        .catch((err) => {
            console.log(err);
        })
};

const blogs_create_get = (req, res) => {
    res.render('create', {title: 'Create Blog Page'});
};

const blogs_create_post = (req, res) => {
    const blog = new Blog(req.body)
    blog.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch((err) => {
            console.log(err);
        })
};

const blog_detail = (req, res) => {
    Blog.findById(req.params.id)
        .then((result) => {
            res.render('details', {title: 'Blog Detail', blog: result})
        })
        .catch((err) => {
            console.log(err);
        });
};

const blog_delete = (req, res) => {
    const id = req.params.id;
    
    Blog.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/blogs' });
      })
      .catch(err => {
        console.log(err);
      });
};

module.exports = {
    blogs_get,
    blogs_create_get,
    blogs_create_post,
    blog_detail,
    blog_delete
}