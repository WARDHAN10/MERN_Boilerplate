const mongoose =require('mongoose')

const postSchema = new mongoose.Schema({

    firstName:{
        type:String,
        required:true,
    },
    Username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }

})

module.exports =mongoose.model("Post",postSchema)