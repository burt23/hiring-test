const express = require("express")
const path = require("path")
import bodyParser from 'body-parser'

let  app = express()

app.use(bodyParser.json())
app.engine('html', require('ejs').renderFile)

app.use(express.static('dist'))

app.get('/', (req, res) => {
    res.render(path.join(__dirname,'/dist/index.html'))
})

app.listen(3000,  () => console.log("Example app listening on port 3000!"))