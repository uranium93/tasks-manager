const mongoose = require('mongoose')

const Tasks = mongoose.model('Tasks',{
    task:{
        type:String,
        required:true,
        trim:true,
    },
    status:{
        type:Boolean,
        required:true,
        default:false,
    }
})

module.exports = Tasks