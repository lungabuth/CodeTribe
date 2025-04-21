const http = require('http');
const url = require('url');

let movies = [
    { id: 1, title: 'Summer House', genre: 'Crime', year: 2019},
    { id: 2, title: 'The Great Escape', genre: 'Thriller', year: 2021},
    { id: 3, title: 'Interstellar', genre: 'Sci-Fi', year: 2014},
    { id: 4, title: 'Venom', genre: 'Action', year: 2024}
];
let series = [
    { id: 1, title: 'Super Cube', genre: 'Sci-Fi', year: 2021, seasons: 1},
    { id: 2, title: 'Attack On Titan', genre: 'Action', year: 2013, seasons: 7}

];
let songs = [
    { id: 1, title: 'Star67', artist: 'Drake', year: 2015},
    { id: 2, title: 'Count Me Out', artist: 'Kendrick Lamar', year: 2022},
    { id: 3, title: ' Which Witch', artist: 'Florence + The Machine', year: 2015}
];

function getBody(req, callBack) {
    let body = '';
    req.on('data', chunk => {
        body += chunk. toString();
    });
    req.on('end', () => {
        callBack(body ? JSON.parse(body) : {});
    });
    
}

const server = http.createServer((req, res) => {
    const parsed = url.parse(req.url, true);
    const path = parsed.pathname;
    const method = req.method; 
    
    res.setHeader(Content-Type, 'application/JSON');

    const send404 = () => {
        res.statusCode = 404;
        res.end(JSON.stringify({ postMessage: 'Not Found'}));
    };
    
    let dataStore;
    if (path === '/movies') dataStore = movies;
    else if (path === '/series') dataStore = series;
    else if (path === '/songs') dataStore = songs;

    if (dataStore) {
        if (method === 'GET') {
            res.end(JSON.stringify(dataStore));
        }
        else if (method === 'POST') {
            getBody(req, newItem => {
                newItem.id = dataStore.length + 1;
                dataStore.push(newItem);
                res.end(JSON.stringify(dataStore));
            });
        }
        else if (method === 'DELETE') {
            getBody(req, body => {
                const idToDelete = body.id;
                dataStore = dataStore.filter(item => item.id !==idToDelete);
                if (path === '/movies') movies = dataStore;
                else if (path === '/series') series = dataStore;
                else songs = dataStore;
                res.end(JSON.stringify(dataStore));
            })
        }
        else if (method === "PUT") {
            getBody(req, updatedItem => {
                dataStore = dataStore.map(item => {
                    if (item.id === updatedItem.id) {
                        return {...item, ...updatedItem};
                    }
                    return item;
                });
                if (path === '/movies') movies = dataStore;
                else if (path === '/series') series = dataStore
                else songs = dataStore;
                res.end(JSON.stringify(dataStore));
                });    
        }        
        else {
            send404();
        }
    } else {
        send404();
    }

});

server.listen(3000, () => {
      console,console.log('Media Server Running On http://localhost:3000');
      
});