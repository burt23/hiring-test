const express = require('express')
const path = require('path')
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())
app.engine('html', require('ejs').renderFile)

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res) => {
  res.render(path.join(__dirname,'/dist/index.html'))
})

app.listen(8080, () => console.log('App listening on port 8080!'))

module.exports = app
