const express = require('express')
require('./database/mongoose')
const Users = require('./models/Users')
const Tasks = require('./models/Tasks')

const app = express()
const port = process.env.PORT || 3000
app.use(express.json())


app.post('/users',(req,res)=>{
    const newUser = new Users(req.body)
    newUser.save().then((result)=>{
        res.status(201).send(result)
    }).catch((error)=>{
        res.status(400).send(error.message)
    })
})

app.post('/tasks',(req,res)=>{
    const newTask = new Tasks(req.body)
    newTask.save().then((result)=>{
        res.status(201).send(result)
    }).catch((e)=>{
        res.status(400).send(e.message)
    })
})

app.get('/users/:id',(req,res)=>{
    const _id=req.param
    Users.find({"_id":_id}).then((user)=>{
        if(!user){
            return res.status(404)
        }
        res.send(user)
    }).catch((e)=>{
        res.status(500)
    })
})

app.get('/users',(req,res)=>{
    Users.find({}).then((user)=>{
       
        res.send(user)
    }).catch((e)=>{
        res.status(500)
    })
})


app.listen(port ,()=>{
    console.log('server is running on port 3000')
})
