const mongoose  = require("mongoose");
const AutoIncrement=require("mongoose-auto-increment");
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    }
})

AutoIncrement.initialize(mongoose.connection);
UserSchema.plugin(AutoIncrement.plugin,"users");

const User=new mongoose.model("users",UserSchema);
module.exports=User;
