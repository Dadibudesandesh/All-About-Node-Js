const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req)
    // console.log(req.url)
    // console.log(req.headers)
    res.setHeader("Content-Type", "text/html");

    if(req.url=="/login"){
    res.write("<h1>Login Page</h1>")
    }
    else if(req.url=="/home"){
    res.write("<h1>Home Page</h1>")
    }
    else if(req.url=="/contact"){
    res.write("<h1>Contact Page</h1>")
    }else{
        res.write("<h1>Invalid Path</h1>")
    }

    res.end()
})

server.listen(4400)