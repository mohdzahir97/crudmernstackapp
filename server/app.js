const dotenv=require("dotenv");
dotenv.config({path:"./config.env"});
const router=require("./router/approuter.js");
const cors=require("cors");
const bodyParser=require("body-parser");
const UserSchema=require("./model/usesche");
const express = require('express');
const app=new express()

const port=process.env.PORT;
require("./DB/conn");
app.use(express.json());
app.use(router);
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});