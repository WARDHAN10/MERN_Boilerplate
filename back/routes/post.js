const express =require('express')
//const mongoose = require('mongoose')
const router =express.Router()
const Post = require('../models/post')
//const axios = require('axios')

//getting a front page



//submit a post 

router.post("/signup",async (req,res)=>{

    const post = new Post({

        firstName:req.body.firstName,
        Username:req.body.Username,
        email:req.body.email,
        password:req.body.password
    })
    try {
        const newPost = await post.save()
        res.json(newPost)
    } catch (err) {
        res.json({message:err})
    }

})

router.post("/login",async (req,res)=>{

    try {
            
       const email=req.body.email
       const password=req.body.password
        
        
       const userEmail = await Post.findOne({email:email}) 
        if(userEmail.password === password)
        {   console.log("its done")
         console.log(userEmail)
    }
        else{
 
            res.send("its not done")
        }
    } catch (err) {
        res.json({message:err})
        console.log("invalid email")
    }
    

})
module.exports=router   