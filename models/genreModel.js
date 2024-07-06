const fs = require('fs');
const path = require('path');
const genresFilePath = path.join(__dirname, '../data/genres.json');

function getGenres() {
    const data = fs.readFileSync(genresFilePath);
    return JSON.parse(data);
}

function saveGenres(genres) {
    fs.writeFileSync(genresFilePath, JSON.stringify(genres, null, 2));
}

module.exports = { getGenres, saveGenres };
