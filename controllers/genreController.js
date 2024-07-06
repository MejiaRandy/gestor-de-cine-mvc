const { getGenres, saveGenres } = require('../models/genreModel');

function listGenres(req, res) {
    const genres = getGenres();
    res.render('genre/index', { genres });
}

function showGenreForm(req, res) {
    res.render('genre/form', { genre: null });
}

function addGenre(req, res) {
    const genres = getGenres();
    const newGenre = { ...req.body, id: Date.now().toString() };
    genres.push(newGenre);
    saveGenres(genres);
    res.redirect('/genres');
}

function editGenre(req, res) {
    const genres = getGenres();
    const genreToEdit = genres.find(g => g.id === req.params.id);
    res.render('genre/form', { genre: genreToEdit });
}

function updateGenre(req, res) {
    const genres = getGenres();
    const updatedGenre = { ...req.body, id: req.params.id };
    const genreIndex = genres.findIndex(g => g.id === req.params.id);
    genres[genreIndex] = updatedGenre;
    saveGenres(genres);
    res.redirect('/genres');
}

function deleteGenre(req, res) {
    let genres = getGenres();
    genres = genres.filter(g => g.id !== req.params.id);
    saveGenres(genres);
    res.redirect('/genres');
}

module.exports = { listGenres, showGenreForm, addGenre, editGenre, updateGenre, deleteGenre };
