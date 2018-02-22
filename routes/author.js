const express=require("express");
const router=express.Router();
const Book=require('../model/book');
const Author=require('../model/author');



router.post('/authors',(req,res)=>{
  
    let author=new Author({
        name:'sabin'
    });

   author.save((err,author)=>{
    
        if(err){
            return res.send(500).json({
                message:"error in authors get"
            })
        }

        let book1=new Book({
            title:'java',
            price:2000,
            author:author._id
        });

        book1.save((err,book1)=>{
            if(err){
                return res.send(500).json({
                    message:"error in book1"
                })
            }
            res.status(201).json({
                message:"book1 created",
                obj:book1
            });
        });

        let book2=new Book({
            title:'php',
            price:3000,
            author:author._id
        });

        book2.save((err,book2)=>{
            if(err){
                return res.send(500).json({
                    message:"error in book2"
                })
            }
            res.status(201).json({
                message:"book2 created",
                obj:book2
            })
            
        });
    });

    
});



module.exports=router;