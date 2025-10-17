const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
    console.log('зашли на сайт');

    const parsedUrl = url.parse(request.url, true);
    const pathname = parsedUrl.pathname;
    const queryParams = parsedUrl.query;

    response.setHeader('Content-Type', 'application/json');

    if (pathname === '/about') {
        response.end(JSON.stringify({ message: "страница р нас" }));
    } else if (pathname === '/user') {
        response.end(JSON.stringify({
            username: queryParams.name || "владос",
            age: queryParams.age
        }));
    } else {
        response.end(JSON.stringify({
            name: queryParams.name || "владос",
            desire: queryParams.desire || "cav empt",
            mood: queryParams.mood || "нормальное",
            timestamp: new Date().toISOString()
        }));
    }
});

server.listen(3000, () => {
    console.log('сайт на http://localhost:3000');
    console.log('ctrl+c чтобы зайти на сайт');
});