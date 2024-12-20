const express = require('express');
const app = express();
const PORT = 3000;

const products = [
    { id: 1, name: "Məhsul 1", price: 10, quantity: 100 },
    { id: 2, name: "Məhsul 2", price: 20, quantity: 50 },
    { id: 3, name: "Məhsul 3", price: 15, quantity: 70 },
    { id: 4, name: "Məhsul 4", price: 7, quantity: 200 },
    { id: 5, name: "Məhsul 5", price: 12, quantity: 80 },
    { id: 6, name: "Məhsul 6", price: 50, quantity: 10 },
    { id: 7, name: "Məhsul 7", price: 30, quantity: 15 },
    { id: 8, name: "Məhsul 8", price: 5, quantity: 500 },
    { id: 9, name: "Məhsul 9", price: 25, quantity: 25 },
    { id: 10, name: "Məhsul 10", price: 40, quantity: 5 }
];


app.get('/products', (req, res) => res.json(products));


app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === +req.params.id);
    product ? res.json(product) : res.status(404).send("Məhsul tapılmadı");
});


app.get('/products-pagination', (req, res) => {
    const { limit = 5, offset = 0 } = req.query;
    res.json(products.slice(+offset, +offset + +limit));
});

app.listen(PORT, () => console.log(`Server http://localhost:${PORT} ünvanında işləyir`));

