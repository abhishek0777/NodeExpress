const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const {people}=require('./data')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//to test http methods,hook methods-public as static assets
app.use(express.static('./methods-public'))

//http GET method
app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

//http POST method

app.post('/api/people', (req, res) => {
    const { name } = req.body
    console.log(req.body,name)
    if (!name) {
      return res
        .status(400)
        .json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).json({ success: true, person: name })
})

app.post('/api/postman/people',(req,res)=>{
    const {name}=req.body
    if(!name){
        return res.status(400).json({success:false,msg:'please provide name '})
    }
    res.status(201).send({success:true,data:[...people,name]})
})

app.put('/api/people/:id',(req,res)=>{
    
    const {name}=req.body
    const {id}=req.params
    console.log(id);
    const person=people.find((person)=>person.id===Number(id))
    if(!person){
        return res.status(404).json({success:false,msg:'no person with given id'})
    }
    const newPeople=people.map((person)=>{
        if(person.id===Number(req.params.id)){
            person.name=name
        }
        return person
    })
    res.status(200).json({success:true,data:newPeople})
})



app.delete('/api/people/:id',(req,res)=>{
    
    const person=people.find((person)=>person.id===Number(req.params.id))
    
    if(!person){
        return res.status(404).json({success:false,msg:'no person with given id'})
    }
    const newPeople=people.filter((person)=>
        person.id!==Number(req.params.id)
    )
    return res.status(200).json({success:true,data:newPeople})
})

app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `no person with id ${req.params.id}` })
    }
    const newPeople = people.filter(
      (person) => person.id !== Number(req.params.id)
    )
    return res.status(200).json({ success: true, data: newPeople })
  })



app.listen(5000,()=>{
    console.log("server is listening on port no 5000");
})