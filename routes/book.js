const express=require("express");
const router=express.Router();
const Book=require('../model/book');
const Author=require('../model/author');

router.post("/book",(req,res)=>{
    let book=new Book({
        title:"abc",
        price:122
    })

    book.save((err,result)=>{
        if(err){
            return res.send(500).json({
                message:"error"
            })
        }

        let author=new Author({
            name:"xyz",
            books:result._id
        })

        author.save((err,author)=>{
            if(err){
                return res.send(500).json({
                    message:"error"
                })
            }

            res.status(200).json({
                message:"sucess",
                obj:result
            })

            
        })
    })
});


router.get('/books',(req,res)=>{
       
    Book.findOne({title:"mongodb"})
        .populate('author')
        .exec((err,book)=>{
            if(err){
                return res.send(500).json({
                    message:"error in populating author"
                })
            }

            res.status(200).json({
                message:"sucessfully populated",
                obj:book.author._id
            })

        })
    
});



module.exports=router;