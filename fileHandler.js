const fs = require('fs')
const path = '/data.json';

function initDataFile() {
    if (!fs.existsSync(path)) {
        const initialData = {
            movies: [],
            series: [],
            songs: []
        };
        fs.writeFilesSync(path, JSON.stringify(initialData, null, 2));
    }
    
}

function readData() {
    const raw = fs.readFileSync(path);
    return JSON.parse(raw);
}

function writeData(newData) {
    fs.writeFilesSync(path.JSON.stringify(newData, null, 2));

}
module.exports = {
    initDataFile,
    readData,
    writeData
};