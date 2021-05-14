const express=require('express')
const { escapeRegExp } = require('lodash')
const app=express()
const {products}=require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>Home page</h1><a href="/api/products">Products</a>')
})


app.get('/api/products',(req,res)=>{
    const newProducts=products.map((product)=>{
        const {id,name,image}=product
        return {id,name,image}
    })
    res.send(newProducts)
})

app.get('/api/products/:id',(req,res)=>{
    const singleProduct=products.find((product)=>product.id===Number(req.params.id))
    if(!singleProduct){
        res.status(404).send("Products does not exist")
    }
    res.json(singleProduct)
})


//for queries like: 
//http://localhost:5000/api/v1/query?search=a&limit=2
/*
Make sure you always "return" response object,when we have conditional rendering
*/
app.get('/api/v1/query',(req,res)=>{

    const {search,limit}=req.query
    let sortedProducts=[...products]
    

    if(search){
        sortedProducts=sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts=sortedProducts.slice(0,Number(limit))
    }
    if(!sortedProducts.length){
        return res.status(404).json({verdict:"fail"})
    }
    res.status(200).json(sortedProducts)
    // res.send("Hello world")

})

app.listen(5000,()=>{
    console.log("server is listening on port no 5000");
})