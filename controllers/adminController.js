const getadmin=async(req,res)=>{
    try{
        return res.send ("sucessfully ")
    }
    catch(err){
        return res.send("please try again")
    }
}

module.exports=getadmin
