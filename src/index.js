const express = require('express')
require('./database/mongoose')
const User = require('./models/Users')


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users',(req,res)=>{
    
    
    const newUser = new User(req.body)
    newUser.save().then((result)=>{
        res.send(result)
    }).catch((error)=>{
        res.send(error)
    })
})

app.listen(port ,()=>{
    console.log('server is running on port 3000')
})

