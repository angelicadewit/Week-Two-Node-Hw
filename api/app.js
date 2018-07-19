const express = require(`express`)
const cors = require(`cors`)
const bodyParser = require(`body-parser`)

const app = express()
//tells the api to respond to anyone
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let tags = []


app.get('/', function(req, res){
    res.send(`Welcome to the tag wall API`)
})

app.post('/tag', function(req, res){
    res.send(`This is how you add tag`)
    tags.push(req.body)
    console.log(`tags array:`, tags)
})

app.get(`/tag`, function(req, res){
    res.send(tags)
})


app.listen(1337, function(){
    console.log(`Example app listening on port 1337!`)
})