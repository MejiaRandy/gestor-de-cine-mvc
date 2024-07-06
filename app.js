const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const homeRoutes = require('./routes/home');
const seriesRoutes = require('./routes/series');
const genreRoutes = require('./routes/genre');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', homeRoutes);
app.use('/series', seriesRoutes);
app.use('/genres', genreRoutes);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});