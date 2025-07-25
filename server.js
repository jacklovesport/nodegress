const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {

        let filePath;
        if  (req.url === '/') {
            filePath = path.join(__dirname, 'public', 'home.html')
        } else if (req.url === '/about') {
            filePath = path.join(__dirname, 'public', 'about.html')
        } else if (req.url === '/contact') {
            filePath = path.join(__dirname, 'public', 'contact.html')
        } else {
            filePath = path.join(__dirname, 'public', '404.html')
        }

        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500)
                res.end('Server Error')
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html'})
                res.end(content)
            }
        })
        
    }
)

const PORT = process.env.PORT || 5006

server.listen(PORT, () => console.log('We are running.')
)