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


module.exports = router;