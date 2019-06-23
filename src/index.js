const express = require('express')
require('./database/mongoose')
const Users = require('./models/Users')
const Tasks = require('./models/Tasks')

const app = express()
const port = process.env.PORT || 3000
app.use(express.json())


app.post('/users',async (req,res)=>{
    const newUser = new Users(req.body)
    try {
        await newUser.save()
        res.status(201).send(newUser)
    } catch(e){
        res.status(400).send(e.message)
    }
})

app.post('/tasks',async (req,res)=>{
    const newTask = new Tasks(req.body)
    try {
        newTask.save()
        res.status(201).send(newTask)
    }catch(e){
        res.status(400).send(e.message)
    }
})

app.get('/users/:id', async (req,res)=>{
    const _id=req.params.id
    try {
        const user = await Users.findById({_id})
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch (e){
        res.status(500).send(e)
    }
})

app.get('/users', async (req,res)=>{
   try{
    const users = await Users.find({})
    res.send(users)
   }catch(e){
        res.status(500).send(e)
   }
})

app.get('/tasks', async (req,res)=>{

    try{
        const tasks = await Tasks.find({})
        res.send(tasks)
    }catch(e){
        res.status(500).send(e)
    }
})

app.get('/tasks/:id',async(req,res)=>{
    const _id=req.params.id
    try{
        const tasks= await Tasks.findById(_id)
        res.send(tasks)
    }catch(e){
        res.status(500).send(e)
    }
})

app.patch('/tasks/:id',async(req,res)=>{
    try{
       const task = await Tasks.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
       if(!task){
           return res.status(404).send()
       }
       res.send(task)
    }catch(e){
        res.status(500).send(e)
    }   
})

app.patch('/users/id',async(req,res)=>{
    try{
        const user = await Users.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        if(!user){
            res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(500).send(e)
    }
})

app.listen(port ,()=>{
    console.log('server is running on port 3000')
})

