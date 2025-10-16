const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.send('Страница на express');
});

app.get('/about', (req, res) => {
    res.send('о нас: Мы изучаем Express.js!');
});

app.get('/search', (req, res) => {
    const searchQuery = req.query.q;
    if (searchQuery) {
        res.send(`результаты поиска: ${searchQuery}`);
    } else {
        res.send('Введите поисковый запрос в параметре q');
    }
});

app.get('/user/:userId', (req, res) => {
    const userId = req.params.userId;
    res.send(`вы запросили пользователя с ID: ${userId}`);
});

app.get('/greet/:name', (req, res) => {
    const userName = req.params.name;
    const city = req.query.city;
    const greeting = `ку, ${userName}!`;
    const cityMessage = city ? ` рад, что ты из ${city}!` : '';
    res.send(greeting + cityMessage);
});

app.listen(PORT, () => {
    console.log(`Сервер Express запущен на http://localhost:${PORT}`);
});