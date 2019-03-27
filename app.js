const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')
const app = express()
    .set('view engine', 'ejs')
    .set('views', 'view')
    .use(express.static('./src/css'))
    .use(express.static('./src/images'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .get('/', index)
    .get('/:id', detail)
    .post("/", index)
 
const port = 3000


function index(req, res) {

    fs.readFile('./src/results.json', function(error, data) {
        if (error) throw error;
        const jsonData = JSON.parse(data.toString());
        const filteredData = jsonData.data.filter(genreBooks)
        const genres = filteredData.map(book => book.genre)
        const unique = genres.filter(onlyUnique)
        const sliceDataGenres = unique.slice(0, 6);


        const result = []
        Object.keys(req.body).forEach(genre=>{
            console.log(genre)
            filteredData.forEach(book=>{
                console.log(book.genre)
                if (genre === book.genre){
                    result.push(book)
                }  
            })
        })

        res.render('pages/index.ejs', {
            genre: sliceDataGenres,
            genresBooks: result
        });
    });
}

function genreBooks(book) {
    return book.genre !== null;
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function detail(req, res) {
    fs.readFile('./src/results.json', function(error, data) {
        const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        const id = fullUrl.substring(fullUrl.lastIndexOf('/') + 1)

        const jsonData = JSON.parse(data.toString());
        const filteredData = jsonData.data.filter(genreBooks)
        const detailResult = []

        filteredData.forEach(book=>{
                if (id === book.isbn){
                    detailResult.push(book)
                }  
            })
        console.log(detailResult)

        res.render('pages/detail.ejs',{
            detailBook: detailResult
        });
    });
}

app.listen(3000, () => console.log(`Example app listening on port ${port}!`))