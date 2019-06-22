const mongoose = require('mongoose')
const validator = require('validator')

const User=  mongoose.model('User',{
    name:{
        type:String,
        required:true,
        trim:true,
        default:"anonymous"
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

module.exports = User