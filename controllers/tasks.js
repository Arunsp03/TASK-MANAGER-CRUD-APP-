const Task=require('../Models/tasks')
const getalltasks=(async (req,res)=>{
    try{
        const tasks=await Task.find(); 
        res.status(200).json({tasks})
    }
    catch(e){
        res.status(400).json({msg:error})
    }
})
const createtasks=(async (req,res)=>{
    try{
        const task= await Task.create(req.body) 
        res.json({task})
        console.log(req.body);
    }
    catch(e){
        res.status(500).json({msg:"error"});
    }
   

})
const gettask=(async (req,res)=>{
    try{
        const task=await Task.findOne({_id:req.params.id}); 
        res.status(200).json({task})
    }
    catch(e){
        res.status(400).json({msg:error})
    }
})
const updatetask=(async (req,res)=>{
    try{
        const {name,completed}=req.body
        const task=await Task.findOneAndUpdate({_id:req.params.id},req.body,{
            runValidators:true,new:true,
        }); 

        res.status(200).json({task})
    }

    catch(e){
        res.status(400).json({msg:error})
    }
})
const deletetask=(async (req,res)=>{
    try{
        const abs=await Task.findOneAndDelete({_id:req.params.id}); 
        res.status(200).json({abs})
    }
    catch(e){
        res.status(400).json({msg:error})
    }
})
module.exports={
    getalltasks,
    createtasks,
    gettask,
    updatetask,
    deletetask,
}