const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')
// const fetch = require("node-fetch")
const app = express()
    .set('view engine', 'ejs')
    .set('views', 'view')
    .use(express.static('./src/css'))
    .use(express.static('./src/js'))
    .use(express.static('./src/images'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({
        extended: true
    }))
    .get('/', index)
    .get('/start', start)
    .post("/detail", detail)

const port = 4000

function index(req, res) {
    res.render('pages/index.ejs');
}

function start(req, res) {
    fs.readFile('./src/result.json', function(error, data) {
        if (error) throw error;
        const jsonData = JSON.parse(data.toString());
        const filteredData = jsonData.data.filter(tostiData)
        // console.log(filteredData)
        // const bread = filteredData.map(tosti => tosti.bread)
        // const sliceDataGenres = unique.slice(0, 6);

        // console.log(Object.keys(req.body))
        // const result = []
        // Object.keys(req.body).forEach(bread=>{
        //     result.push(bread)
        // })
        // console.log(result)

        res.render('pages/start.ejs', {
            tostiResult: filteredData
        });
    });
}


function tostiData(tosti) {
    return tosti.bread !== null;
}


function detail(req, res) {
    fs.readFile('./src/result.json', function(error, data) {
        if (error) throw error;
        const jsonData = JSON.parse(data.toString());
        const filteredData = jsonData.data.filter(tostiData)
        // console.log(filteredData)
        // const bread = filteredData.map(tosti => tosti.bread)
        // const sliceDataGenres = unique.slice(0, 6);

        // console.log(Object.keys(req.body))
        const result = []
        Object.values(req.body).forEach(bread => {
            result.push(bread)
        })
        console.log("result op detail is" + result)

        res.render('pages/detail.ejs', {
            tostiResult: result
        });
    });
}

app.listen(4000, () => console.log(`Example app listening on port ${port}!`))