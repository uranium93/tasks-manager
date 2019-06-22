const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-db',{
    useNewUrlParser:true,
    useCreateIndex:true
})

const User=  mongoose.model('User',{
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('invalid email ') 
            }
        }
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:6,
        validate(value){
            if(value.includes('password')){
                throw new Error('dont use the string "passwrod" in your password')
            }
        }
    },
    age:{
        type:Number,
        dafault:0,
        validate(value){
            if(value<0){
                throw new Error('age must be positive value')
            }
        }
    }
})

const newUser = new User({
    name:'heithem         ',
    email:'yaHYa@hotmail.com',
    password:'24Guelma'
    
})

newUser.save().then((result)=>{
    console.log("Succes",result)

}).catch((error)=>{
    console.log("Faild! ",error)
})

const Tasks = mongoose.model('Tasks',{
    task:{
        type:String,
        required:true,
        trim:true,
    },
    status:{
        type:Boolean,
        default:false,
    }
})

/* const newTask = new Tasks({
    name:"add credit dard to the project",
    status:false
})

newTask.save().then((result)=>{
    console.log('Succes',result)
}).catch((error)=>{
    console.log('Faild!',error.value)
}) */

