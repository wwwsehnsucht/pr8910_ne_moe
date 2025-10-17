const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.send('Главная страница на Express!');
});

app.get('/about', (req, res) => {
    res.send('О нас: Мы изучаем Express.js!');
});

app.get('/search', (req, res) => {
    const searchQuery = req.query.q;
    if (searchQuery) {
        res.send(`Результаты поиска по запросу: ${searchQuery}`);
    } else {
        res.send('Введите поисковый запрос в параметре q');
    }
});

app.get('/user/:userId', (req, res) => {
    const userId = req.params.userId;
    res.send(`Вы запросили профиль пользователя с ID: ${userId}`);
});

app.get('/greet/:name', (req, res) => {
    const userName = req.params.name;
    const city = req.query.city;
    const greeting = `Привет, ${userName}!`;
    const cityMessage = city ? ` Рад, что ты из ${city}!` : '';
    res.send(greeting + cityMessage);
});

app.listen(PORT, () => {
    console.log(`Сервер Express запущен на http://localhost:${PORT}`);
});