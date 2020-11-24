const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const PORT = 3000;
const app = express();

// Connect to Database 
const dbURI = 'mongodb+srv://qulu:testing321@cluster0.cya7l.mongodb.net/node-tuts>?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        app.listen(PORT)
    })
    .catch((err) => {
        console.log(err);
    })


app.use(express.static('public'))

app.set('view engine', 'ejs');

app.use(express.urlencoded( {extended:true} ));

app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About Page'});
});


// Routes
app.use('/', blogRoutes)

app.use((req, res) => {
    res.status(404).render('404', {title: '404 Page'});
});