const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
// parse incomming request body
app.use(express.json())
// app.use(bodyParser.json());

const port = process.env.PORT || 5000;


const users = [
    {id: 1, name: 'Arman', email: 'armanhr43@gmail.com'},
    {id: 2, name: 'murshedul', email: 'murshedul@gmail.com'},
    {id: 3, name: 'faisal', email: 'faisal@gmail.com'},
    {id: 4, name: 'shahin', email: 'shahin@gmail.com'},
    {id: 5, name: 'raihan', email: 'raihan@gmail.com'},
    {id: 6, name: 'ridoan', email: 'ridoan@gmail.com'},
    {id: 7, name: 'yeasin', email: 'yeasin@gmail.com'}
]

const fruits = [
    {id: 1, name: 'Mango', price: 150},
    {id: 2, name: 'Pinapple', price: 50},
    {id: 3, name: 'Watermelon', price: 250},
    {id: 4, name: 'Orange', price: 170},
    {id: 5, name: 'Grapes', price: 190}
]

app.get('/', (req, res) => {
    res.send(`
        Creation of dynamic Api
        Go to /users path to see users
        Go to /user/userId to see single
    `
    )
})
app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const searchedUsers = users.filter(user => user.name.toLowerCase().includes(req.query.name));
        res.send(searchedUsers);
    }
    else {
        res.send(users)
    }
})
app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
})

app.post('/user', (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(fruits)
})

app.listen(port, () => {
    console.log('Listening to port', port);
})