const express=require("express");

const {mongoose}=require('./db/mongo.connection');


var app=express();

const port=3000;

const bookRoutes=require('./routes/book');
const authorRoutes=require('./routes/author');


app.use('/',bookRoutes);
app.use('/',authorRoutes);

app.listen(port,()=>{
    console.log("server started at"+port)
})