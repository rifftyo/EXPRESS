const express = require('express')
const app = express()

var bodyParser = require('body-parser')
var cors = require('cors')

var jsonParser = bodyParser.json()

var urlencodeParser = bodyParser.urlencoded({ extended: false })
const port = 3000

app.use(cors())
app.use(jsonParser);
app.use(urlencodeParser);

app.get('/', (req, res) => {
  res.json('Hello World!')
});

app.post('/login', (req, res) => {
    const username = 'Rifky'
    const password = '12345678'

    // check if username is valid
    if (req.body.username !== username) {
        res.json({ status: 'error, username not found' })
        return
    }

    // check if password is valid
    if (req.body.password !== password) {
        res.json({ status: 'error, wrong password' })
        return
    }

    res.json({ status: 'success' })

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});