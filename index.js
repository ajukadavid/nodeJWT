const express = require('express')

const jwt =  require('jsonwebtoken')

const app = express()

app.get('/api', (req, res) => {
    res.json({
        message: 'Hey there! Welcome to this API service'
    })
})
app.post('/api/posts', (req, res) => {
    res.json({
        message: 'Posts created..'
    })
})
app.post('/api/login', (req, res) => {
    const user = {
        id: 1,
        username: 'John',
        email: 'john@gmail.om'
    }
    jwt.sign({user: user}, 'secretKey',(err, token) => {
        res.json({
            token
        })
    })
})

app.listen(3000, (req, res) => {
    console.log('Server started on port 3000')
})