const http=require('http')
const server=http.createServer((req,res)=>{
    // console.log(req);
    // res.write("welcome to our home page")
    // res.end()
    if(req.url=='/'){
        res.end("This is / page")
    }
    if(req.url=='/about'){
        res.end("its is about page")
    }
    res.end(`
    <p>OOPS page is not present</p>
    <a href="/">Go back home</a>
    `)
})
const PORT=5000
server.listen(PORT,console.log(`Server started on port ${PORT}`))


//another style

// const http=require('http')
// const {readFileSync}=require('fs')
// const homePage=readFileSync('./navbar-app/index.html')
// http.createServer((req,res)=>{
//     console.log(req.url);
//     console.log("user hit the server");
//     res.writeHead(200,{'content-type':'text/html'})
//     res.write(homePage)
//     res.end()
// }).listen(5000)