//const connectionstring="mongodb+srv://Arun:arunmongo03@node-express-projects.wlvjjbk.mongodb.net/Task-Manager?retryWrites=true&w=majority"
const mongoose=require('mongoose')
const connectdb=(url)=>{
    mongoose.connect(url,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true,
        useFindAndModify:false
    })
}
module.exports=connectdb

