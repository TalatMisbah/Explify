const jwt=require('jsonwebtoken')
const {JWT_SECRET}=require('../config/config')
const mongoose = require("mongoose");
const User = mongoose.model("User");



module.exports=(req,res,next)=>{
    const {authorization} = req.headers
    if(!authorization){
        res.status(401).json({error:"you must logged in "})
    }
    const token=authorization.replace("Bearer ","")
    jwt.verify(token,JWT_SECRET,(err,payload)=>{
    if(err){
        return res.status(401).json({error:"you must logged in"})
    }
    console.log(payload)
    const {id}=payload
    User.findById(id).then((userData)=>{
        console.log('user', userData);
        req.user=userData
        next();
    })       
})


}