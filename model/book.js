
const mongoose=require("mongoose");
const Author=require("./author")
var Schema = mongoose.Schema;




var BookSchema=mongoose.Schema({
    title:String,
    price:Number,
    author:{
        type:Schema.Types.ObjectId,
        ref:'Author'
    }
});



module.exports=mongoose.model("Book",BookSchema);


