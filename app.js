const express=require('express')
const app=express()

//req->middleware->res

//Method -1
// app.get('/',(req,res)=>{
//     const method=req.method
//     const url=req.url
//     const time=new Date().getFullYear()
//     console.log(method,url,time);
//     res.send('home')
// })



//Method-2
// const logger=(req,res,next)=>{
//     const method=req.method
//     const url=req.url
//     const time=new Date().getFullYear()
//     console.log(method,url,time)
//     next()
// }
// app.get('/',logger,(req,res)=>{
//     res.send('home');
// })
//Method-2 end



//Method-3
const logger=require('./Middleware/logger')

//set middleware
app.use(logger)
/*
if it is app.use('/api',logger)
to work it on those specified path
*/
app.get('/',(req,res)=>{
    res.send("home")
})
//Method-3 end




app.listen(5000,()=>{
    console.log("server is listening on port no 5000");
})