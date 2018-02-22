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
    Author.findOne({name:'xyz'})
    .populate('books')
    .exec((err,author)=>{
        if(err){
            return res.status(500).json({
                message:"error",
                obj:author
            })
        }
    })
    
});



module.exports=router;