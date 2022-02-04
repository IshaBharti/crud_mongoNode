const req = require("express/lib/request");
const res = require("express/lib/response");
const User=require( "../model/userModel")
// const Bcrypt = require("bcryptjs");


const getUser= async (req,res) => {
    try{
        return res.send({ status: 200,message:'Succesfully'});

     }catch(err){
         console.log(err.message);
       return res.send({ status: 500,message:'Something went wrong, please try again later!'});
     }
  }

// Insert Data
const insertdata=async(req,res)=>{
    // const hashPass = await bcrypt.hash(req.body.password, 10);

    try{ 
       var userData = await User.findOne({email:req.body.email})
        
        {
            const {fullName,email,phoneNumber}=req.body
            const obg= new User({
             fullName,
             email,
             phoneNumber})
     
         console.log(obg,"sssss")
     
            obg.save()
            .then(async(data)=>{
                return res.send({status:200,message:"data is inserted suceesfully"})
            })
        }
    

        // {
        //     return res.send({status:400 ,message:"Email already exist!"})
        //     console.log(err);
        // }
    }    
     catch(err){
     console.log("error",err);
         return res.send({status:500 ,message:"Something went wrong"})
    }
        
}


const getDocument=async(req,res) =>{
//     // for all data
   try{
       console.log("isha");
      const result= await User.find()
      console.log(result);
      return res.send(result)
        
  }catch(err){
    console.log(err);
    return res.send("error")
  }

}
// update Document
const updateDocument=async (req,res) =>{
    try{
        const  result=await User.updateOne({_id:req.params.id},{
        
    
            fullName:req.body.fullName,
            phoneNumber:req.body.phoneNumber,
            email:req.body.email
        

        })
        // console.log(fullName);

    console.log(result,"hello")
    res.send(result)
    res.send({status:200 ,message:"succesfulupdate Doc"})
 }
catch(err){
    console.log(err.message);
} }
// single Doc
const singleDocument=async(req,res)=>{
    try{
        const  result=await User.findOne({_id:req.params.id},{
        
    
            fullName:req.body.fullName,
            phoneNumber:req.body.phoneNumber,
            email:req.body.email
        

        })

    console.log(result,"hello")
    res.send(result)
    res.send({status:200 ,message:"succesfulupdate Doc"},)
 }
catch(err){
    console.log(err.message);
} }
// Delete user
const deleteDocument=async(req,res)=>{
    // console.log("ishadel");

    try{
    const result =  await User.deleteOne({ id: req.params.id })
    console.log(result);
    
    res.send({status:200 ,message:"Deleted successfully"})
}
    
catch(err){
    console.log(err.message);
} }


module.exports = {
    getUser,insertdata,getDocument,updateDocument,singleDocument,deleteDocument
    
}

