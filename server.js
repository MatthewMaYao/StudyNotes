const http = require('http')
const fs = require('fs')

console.log('localhost:2018')

let server = http
    .createServer((req, res) => {
        let url = req.url
        console.log(url)
        if (url == '/') {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write('<h1 style="text-align: center; margin-top: 3em" >Please enry the page path.</h1>')
            res.end()
            return
        }

        router(req, res, url)
    })
    .listen(2018)

function router(req, res, url) {
    let type = url.substr(url.lastIndexOf('.') + 1, url.length)
    res.writeHead(200, { 'Content-Type': `text/${type}` })
    fs.readFile(`${__dirname}/${url}`, (err, data) => {
        if (!err) {
            res.end(data)
        }
        res.end()
    })

}