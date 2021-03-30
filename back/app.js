const express = require('express')
const app=express()
const mongoose =require('mongoose')
const bodyP = require('body-parser');
const cors =require('cors')
const routesurl=require('./routes/post')
require('dotenv').config({ path: 'E:\pro\node projects\boilerplate\.env' });
app.use(bodyP.json())
app.use(cors())

app.use('/post',routesurl)
//db connect 
const url="mongodb+srv://solanki:harsh@cluster0.81sh6.mongodb.net/cluster0?retryWrites=true&w=majority"
mongoose.connect(url,{ useNewUrlParser: true , useUnifiedTopology:true}).then(() => {
    console.log("DB connected");
})


mongoose.connection.once('open', function(){
    console.log('Conection has been made!');
  }).on('error', function(error){
      console.log('Error is: ', error);
  });


//test
app.get("/",async (req,res)=>{

    res.send("u are on the page")

})

const PORT=process.env.PORT || 5000
//listen
app.listen(PORT,()=>{
    console.log("port is working")
});