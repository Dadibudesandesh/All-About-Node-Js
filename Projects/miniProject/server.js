const http=require('http');
http.createServer((req,res)=>{
    res.write("<h1>This is sandesh</h1>")
res.end("sandesh")
}).listen(3000);
