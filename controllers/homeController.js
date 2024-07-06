// controllers/homeController.js
const { getSeries } = require('../models/seriesModel');
const { getGenres } = require('../models/genreModel');

function renderHome(req, res) {
    const series = getSeries();
    const genres = getGenres();
    let filteredSeries = series;

    if (req.query.genre) {
        filteredSeries = series.filter(s => s.genre === req.query.genre);
    }

    res.render('home', { series: filteredSeries, genres });
}

module.exports = { renderHome };