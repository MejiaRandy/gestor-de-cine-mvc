const fs = require('fs');
const path = require('path');
const seriesFilePath = path.join(__dirname, '../data/series.json');

function getSeries() {
    const data = fs.readFileSync(seriesFilePath);
    return JSON.parse(data);
}

function saveSeries(series) {
    fs.writeFileSync(seriesFilePath, JSON.stringify(series, null, 2));
}

module.exports = { getSeries, saveSeries };
