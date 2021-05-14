const express=require('express')
const app=express()
const bodyParser=require('body-parser')

//routes
const people=require('./routes/people')
const auth=require('./routes/auth')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//to test http methods,hook methods-public as static assets
app.use(express.static('./methods-public'))



app.use('/api/people',people)
app.use('/login',auth)


app.listen(5000,()=>{
    console.log("server is listening on port no 5000");
})