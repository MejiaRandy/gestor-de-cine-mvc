const { getSeries, saveSeries } = require('../models/seriesModel');
const { getGenres } = require('../models/genreModel');

function listSeries(req, res) {
    const series = getSeries();
    res.render('series/index', { series });
}

function showSeriesForm(req, res) {
    const genres = getGenres();
    res.render('series/form', { series: null, genres });
}

function addSeries(req, res) {
    const series = getSeries();
    const newSeries = { ...req.body, id: Date.now().toString() };
    series.push(newSeries);
    saveSeries(series);
    res.redirect('/series');
}

function editSeries(req, res) {
    const series = getSeries();
    const genres = getGenres();
    const seriesToEdit = series.find(s => s.id === req.params.id);
    res.render('series/form', { series: seriesToEdit, genres });
}

function updateSeries(req, res) {
    const series = getSeries();
    const updatedSeries = { ...req.body, id: req.params.id };
    const seriesIndex = series.findIndex(s => s.id === req.params.id);
    series[seriesIndex] = updatedSeries;
    saveSeries(series);
    res.redirect('/series');
}

function deleteSeries(req, res) {
    let series = getSeries();
    series = series.filter(s => s.id !== req.params.id);
    saveSeries(series);
    res.redirect('/series');
}

function showSeriesDetails(req, res) {
    const series = getSeries();
    const serie = series.find(s => s.id === req.params.id);
    if (serie) {
        const youtubeEmbedUrl = serie.youtubeLink.replace("watch?v=", "embed/");
        res.render('series/details', { serie, youtubeEmbedUrl });
    } else {
        res.status(404).send('Series not found');
    }
}

module.exports = { listSeries, showSeriesForm, addSeries, editSeries, updateSeries, deleteSeries, showSeriesDetails };