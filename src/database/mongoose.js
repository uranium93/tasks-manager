const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-db',{
    useNewUrlParser:true,
    useCreateIndex:true
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

