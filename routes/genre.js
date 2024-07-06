const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genreController');

router.get('/', genreController.listGenres);
router.get('/new', genreController.showGenreForm);
router.post('/new', genreController.addGenre);
router.get('/edit/:id', genreController.editGenre);
router.post('/edit/:id', genreController.updateGenre);
router.get('/delete/:id', genreController.deleteGenre);

module.exports = router;
