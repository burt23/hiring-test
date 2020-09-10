import express from 'express'
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/health', function (req, res) {
    res.send({
        status: 'OK'
    })
})  

app.listen(process.env.PORT || 8080)