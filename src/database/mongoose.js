const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-db',{
    useNewUrlParser:true,
    useCreateIndex:true
})

const User=  mongoose.model('User',{
    name:{
        type:String
    },
    age:{
        type:Number
    }
})

/* const newUser = new User({
    name:'abdou',
    age:26
})

newUser.save().then((result)=>{
    console.log("Succes",result)

}).catch((error)=>{
    console.log("Faild! ")
}) */

const Tasks = mongoose.model('Tasks',{
    task:{
        type:String
    },
    status:{
        type:Boolean
    }
})

const newTask = new Tasks({
    name:"add credit dard to the project",
    status:false
})

newTask.save().then((result)=>{
    console.log('Succes',result)
}).catch((error)=>{
    console.log('Faild!',error.value)
})

