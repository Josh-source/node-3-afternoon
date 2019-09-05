require('dotenv').config();
const express = require('express');
const massive = require('massive');
const {getOne, getAll, create, update, deleteOne} = require("./products_controller");
const app = express();


const{SERVER_PORT, CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING)
    .then(dbInstance => {
        app.set("db", dbInstance);
        console.log("db connected");
    })
    .catch(err => console.log(err));


app.use(express.json());

app.get('/api/products', getOne);
app.get('/api/products/:id', getAll);
app.put('/api/products/:id', update);
app.post('/api/products', create);
app.delete('/api/products/:id', deleteOne);

app.listen(SERVER_PORT, () => {
    console.log(`Server Listening on port ${SERVER_PORT}.`);
})