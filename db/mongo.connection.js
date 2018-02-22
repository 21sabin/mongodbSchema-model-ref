const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/mongodb");

mongoose.connection.on("connect",()=>{
    console.log("mongodb connected")
});

mongoose.connection.on("error",(err1)=>{
    console.log("connection failed");
});

module.exports={mongoose}


