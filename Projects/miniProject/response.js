const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.write(
        `<html>
            <body>
                <h4>sandeh</h4>
            </body>
        </html>`
    )
    res.end()
})

server.listen(5000)