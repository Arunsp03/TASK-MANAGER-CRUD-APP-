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

