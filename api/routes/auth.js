const router  = require("express").Router();
const User = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//REGISTER


router.post('/register',async (req,res)=>{
    
    try{
    const salt = await bcrypt.genSalt(10);
    const hashedPaswd = await bcrypt.hash(req.body.password,salt)

        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPaswd
        });
        const user = await newUser.save();

        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
})




//LOGIN

router.post('/login',async (req,res)=>{
    try{
        async function generateAccessToken(info) {
            return jwt.sign(info, process.env.SECRET);
                } 
            

        const user = await User.findOne({username:req.body.username});
        !user && res.status(400).json(`user not Found`);

        const validated = await bcrypt.compare(req.body.password,user.password);
        !validated && res.status(400).json('Wrong Credentials!');

        const {password,...others}=user._doc
        const token =await generateAccessToken(others);
        const myUser = {token:`Bearer ${token}`,user:others}
        res.status(200).json(myUser)

    }catch(err){
        res.status(500).json(err);
    }
})

module.exports= router