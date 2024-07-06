const express = require('express');
const router = express.Router();
const seriesController = require('../controllers/seriesController');

router.get('/', seriesController.listSeries);
router.get('/new', seriesController.showSeriesForm);
router.post('/new', seriesController.addSeries);
router.get('/edit/:id', seriesController.editSeries);
router.post('/edit/:id', seriesController.updateSeries);
router.get('/delete/:id', seriesController.deleteSeries);
router.get('/:id', seriesController.showSeriesDetails);

module.exports = router;
