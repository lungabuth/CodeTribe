const http = require('http');
const url = require('url');
const fs = require('fs');
const { initDataFile, readData, writeData } = require('./fileHandler');

initDataFile();

const PORT = 3000;

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url, true);
  const path = parsed.pathname;
  const method = req.method;


  if (path === '/' && method === 'GET') {
    fs.readFile('./index.html', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error loading documentation.');
      } else {
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
    return;
  }

  const routes = ['movies', 'series', 'songs'];
  const base = path.slice(1);

  if (!routes.includes(base)) {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Not Found' }));
    return;
  }

  res.setHeader('Content-Type', 'application/json');

  const handleBody = (callback) => {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => {
      try {
        const parsed = body ? JSON.parse(body) : {};
        callback(parsed);
      } catch {
        res.statusCode = 400;
        res.end(JSON.stringify({ message: 'Invalid JSON' }));
      }
    });
  };

  const data = readData();
  let items = data[base];

  if (method === 'GET') {
    res.end(JSON.stringify(items));
  }

  else if (method === 'POST') {
    handleBody(newItem => {
      newItem.id = items.length + 1;
      items.push(newItem);
      data[base] = items;
      writeData(data);
      res.end(JSON.stringify(items));
    });
  }

  else if (method === 'PUT') {
    handleBody(updated => {
      items = items.map(item => item.id === updated.id ? { ...item, ...updated } : item);
      data[base] = items;
      writeData(data);
      res.end(JSON.stringify(items));
    });
  }

  else if (method === 'DELETE') {
    handleBody(toDelete => {
      items = items.filter(item => item.id !== toDelete.id);
      data[base] = items;
      writeData(data);
      res.end(JSON.stringify(items));
    });
  }

  else {
    res.statusCode = 405;
    res.end(JSON.stringify({ message: 'Method Not Allowed' }));
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
})