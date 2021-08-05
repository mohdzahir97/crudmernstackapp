const mongoose=require("mongoose")
const DB=process.env.DB;
mongoose.connect(DB,{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Connect Successfully")
})
.catch((error)=>{
    console.log(error);
})