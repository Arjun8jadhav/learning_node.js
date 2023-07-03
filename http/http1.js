const http=require('http');
const server= http.createServer((req,res)=>{
    if(req.url === '/'){
    res.end('home page');
    }
    else if(req.url === '/about'){
        res.end('THIS is about page');
    }
    else{
    res.end(`<h1>oops! </h1>
    <p> we don't have requested resources</p>
    `)
    }
})
server.listen(5000)