const express = require('express');
const router = express.Router();
const UserSchema=require("../model/usesche");



router.post('/adduser',async (req, res) => {
    const {name,username,email,phone}=req.body;
    try {
      
        const NewUser=new UserSchema({name,username,email,phone})
        const result=await NewUser.save()
        res.json({msg:result});

    } catch (error) {
        console.log(error);
    }
    
});

router.get('/alluser', async(req, res) => {
    try {
        const result=await UserSchema.find();
        res.status(201).send(result);
    } catch (error) {
        console.log(error);
    }

});

router.get('/edituser/:id',async (req, res) => {
    const id=req.params.id;
    try {
       const result= await UserSchema.findOne({_id:id});
       res.status(201).send(result);
    } catch (error) {
        console.log(error);
    }
});

router.put("/edit/:id",async(req,res)=>{
    try {
        const id=req.params.id;
        // console.log(req.body.user.name);
        const {name,username,email,phone}=req.body.user;

        const result=await UserSchema.findByIdAndUpdate({_id:id},
            {
                $set:{name,username,email,phone}
            },
            {new:true})

        const data =await result.save();
        res.status(201).json(data);

    } catch (error) {
        console.log(error);
    }
})


router.delete('/delete/:id',async (req, res) => {
    try {
        const id=req.params.id;
        const result=await UserSchema.findByIdAndDelete({_id:id});
        res.status(201).send(result);
    } catch (error) {
        console.log(error);
    }

});
module.exports=router;