const http=require("http");

const userData=[
    {
        name:"sandesh",
        age:21,
        email:"sandesh@gmail.com"
    },
    {
        name:"sandy",
        age:20,
        email:"sandy@gmail.com"
    },{
        name:"sd",
        age:22,
        email:"sd@gmail.com"
    }
]
const server=http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/json")
    res.write(JSON.stringify(userData))
    res.end()
});

server.listen(6100)

