const mongoose =require('mongoose');


mongoose.connect(
    "mongodb://localhost:27017/data",
    { 
        keepAlive: true,

        useNewUrlParser: true, 
       
        
    },
    (err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("database connect successfully");
        }
    }
)
