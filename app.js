const connectdb=require('./db/connect')
const express=require('express');
const app=express();
const tasks=require('./routes/tasks')
require('dotenv').config()
app.use(express.json())
app.use(express.static('./public'))
app.get('/hello',(req,res)=>{
    console.log(res.send('hey'));
})
app.use('/api/v1/tasks',tasks); 
const port=5500;
const start=async ()=>{
    try{
        await connectdb(process.env.MONGO_URI);
        app.listen(port,(req,res)=>{
            console.log("server is listening");
        })
    }
    catch(e){
        console.log(e);
    }
}
start();


