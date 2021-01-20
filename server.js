const express = require("express")
const path = require("path")
import bodyParser from 'body-parser'

let  app = express()

app.use(bodyParser.json())
app.engine('html', require('ejs').renderFile)

app.use(express.static('public'))
app.use('/static', express.static('public/assets'))

app.get('/', (req, res) => {
    res.render(path.join(__dirname,'/index.html'))
})

/* 
    Build a route that returns a JSON response of an array of objects with this shape for each mattress:
    [
        {
            "sku": "classic",
            "name": "Saatva Classic",
            "price": 999,
            "reviewRating": 4.9,
            "imageFileName": "classic-carousel.jpg"
        },
        ...
    ]
*/


app.listen(3000,  () => console.log("Example app listening on port 3000!"))