const http=require('http')
const {readFileSync}=require('fs')
const homePage=readFileSync('./navbar-app/index.html')
http.createServer((req,res)=>{
    console.log(req.url);
    console.log("user hit the server");
    res.writeHead(200,{'content-type':'text/html'})
    res.write(homePage)
    res.end()
}).listen(5000)