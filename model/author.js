const mongoose=require('mongoose');
const Book=require('./book')

var Schema = mongoose.Schema;


const AuthorSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    books:[{type:Schema.Types.ObjectId,ref:'Book'}]
});

module.exports=mongoose.model("Author",AuthorSchema);