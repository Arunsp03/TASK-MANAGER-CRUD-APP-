const mongoose=require('mongoose')
const Taskschema=new mongoose.Schema({
    name:String,
    completed:Boolean,
})
module.exports=mongoose.model('Task',Taskschema);
