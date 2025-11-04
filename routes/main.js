const express = require('express');
const router = express.Router();

var shopData = {shopName: "Drinks4Students",
                productCategories: ["Soft Drinks", "Juices", "Water", "Energy Drinks", "Hot Drinks"],
                products: [
                    {name: "Coca Cola", category: "Soft Drinks", price: 1.50},
                    {name: "Pepsi", category: "Soft Drinks", price: 1.40},
                    {name: "Orange Juice", category: "Juices", price: 2.00},
                    {name: "Apple Juice", category: "Juices", price: 2.10},
                    {name: "Mineral Water", category: "Water", price: 1.00},
                    {name: "Sparkling Water", category: "Water", price: 1.20},
                    {name: "Red Bull", category: "Energy Drinks", price: 2.50},
                    {name: "Monster", category: "Energy Drinks", price: 2.60},
                    {name: "Coffee", category: "Hot Drinks", price: 1.80},
                    {name: "Tea", category: "Hot Drinks", price: 1.50}
                ],
                shops: [
                    {manager: "Alice Smith", location: "London"},
                    {manager: "Bob Johnson", location: "Manchester"},
                    {manager: "Charlie Brown", location: "Birmingham"},
                    {manager: "Diana Prince", location: "Leeds"},
                    {manager: "Ethan Hunt", location: "Glasgow"}
                ]
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