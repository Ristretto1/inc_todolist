"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// middleware for req.body
app.use(express_1.default.json());
const products = [{ id: 1, title: 'tomato' }, { id: 2, title: 'orange' }];
const addresses = [{ id: 1, value: 'Gubkina st 31' }, { id: 2, value: 'Mira 22' }];
// products
app.get('/products', (req, res) => {
    if (req.query.title) {
        const searchString = String(req.query.title);
        res.send(products.filter(el => el.title.indexOf(searchString) > -1));
    }
    else {
        res.send(products);
    }
});
app.get('/products/:id', (req, res) => {
    const item = products.find(el => el.id === Number(req.params.id));
    if (!item) {
        res.sendStatus(404);
        return;
    }
    res.send(item);
});
app.delete('/products/:id', (req, res) => {
    const item = products.find(el => el.id === Number(req.params.id));
    if (!item) {
        res.sendStatus(404);
        return;
    }
    else {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === Number(req.params.id)) {
                products.splice(i, 1);
                console.log(products);
                res.sendStatus(204);
                return;
            }
        }
    }
});
app.post('/products/', (req, res) => {
    const { title } = req.body;
    const newItem = {
        id: Number(new Date()),
        title
    };
    products.push(newItem);
    res.status(201).send(newItem);
});
app.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const params = req.body;
    let item = products.find(el => el.id === Number(id));
    if (!item) {
        res.sendStatus(404);
        return;
    }
    else {
        item.title = req.body.title;
        res.send(item);
    }
});
// addressess
app.get('/addresses', (req, res) => {
    res.send(addresses);
});
app.get('/addresses/:id', (req, res) => {
    const item = addresses.find(el => el.id === Number(req.params.id));
    if (!item) {
        res.sendStatus(404);
        return;
    }
    res.send(item);
});
// start app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
