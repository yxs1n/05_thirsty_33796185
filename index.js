var express = require('express');
var ejs = require('ejs');
const app = express();
const path = require('path');
const port = 8000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

const mainRoutes = require('./routes/main');
app.use('/', mainRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});