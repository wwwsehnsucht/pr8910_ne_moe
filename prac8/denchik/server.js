const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
    console.log('на сайт зашли!');

    const parsedUrl = url.parse(request.url, true);
    const pathname = parsedUrl.pathname;
    const queryParams = parsedUrl.query;

    response.setHeader('Content-Type', 'application/json');

    if (pathname === '/about') {
        response.end(JSON.stringify({ message: "страница р нас" }));
    } else if (pathname === '/user') {
        response.end(JSON.stringify({
            username: queryParams.name || "desu",
            age: queryParams.age
        }));
    } else {
        response.end(JSON.stringify({
            name: queryParams.name || "гость",
            desire: queryParams.desire || "ничего",
            mood: queryParams.mood || "нормальное",
            timestamp: new Date().toISOString()
        }));
    }
});

server.listen(3000, () => {
    console.log('сайт на http://localhost:3000');
    console.log('CTLR+C');
});