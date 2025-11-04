const express = require('express');
const router = express.Router();

var shopData = {shopName: "Drinks4Students",
                productCategories: ["Soft Drinks", "Juices", "Water", "Energy Drinks", "Hot Drinks"],
};

router.get('/', (req, res) => {
    res.render('index.ejs', shopData);
});

router.get('/about', (req, res) => {
    res.render('about.ejs', shopData);
});

router.get('/search', (req, res) => {
    res.render('search.ejs', shopData);
});

router.get('/search_result', (req, res) => {
    //TODO
    res.send('You searched for ' + req.query.search_text + ' in category ' + req.query.category);
});

router.get('/register', (req, res) => {
    res.render('register.ejs', shopData);
});

router.post('/registered', (req, res) => {
    res.send('Hello ' + req.body.first + ' ' + req.body.last + ', you are now registered! We will send a confirmation email to ' + req.body.email);
});


module.exports = router;