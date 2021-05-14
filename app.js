const express=require('express')
const app=express()

//req->middleware->res

const logger=require('./Middleware/logger')
const authorize=require('./Middleware/authorize')


//intstalled middleware(third party)

//morgan is a logger middleware
const morgan=require('morgan')
//tiny method gives essential info only
app.use(morgan('tiny'))


//set middleware
// app.use([logger,authorize])

app.get('/',(req,res)=>{
    console.log(req.user);
    res.send("home")
})



app.listen(5000,()=>{
    console.log("server is listening on port no 5000");
})