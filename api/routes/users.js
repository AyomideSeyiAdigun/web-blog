const router  = require("express").Router();
const User = require('../models/Users');
const Post = require('../models/Posts');
const jwt = require('jsonwebtoken');
 

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  let token = authHeader && authHeader.split(' ')[1]
  token = token.slice(0, -1);
  if (token == null) return res.status(401).json('You can only edit your account')
 
  jwt.verify(token, process.env.SECRET, (err, user) => {
     
    if (err) return res.sendStatus(403).json('Error')

    req.user = user

    next()
  })


 
}

//UPDATE
router.put('/:id', authenticateToken, async (req,res)=>{
    if(req.body.password){
        const salt = await bcrypt.genSalt(10);
       req.body.password = await bcrypt.hash(req.body.password,salt)
    }
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
     
        res.status(200).json(updatedUser);
    }catch(err){
        res.status(500).json(err);
    }
}) 


//DELETE 

router.delete('/:id', authenticateToken, async (req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        try{
            await Post.deleteMany({username:user.username})
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json('user has been deleted');
        }catch(err){
            res.status(500).json(err);
        }
    }catch(err){
        res.status(404).json('User not found')
    }
}) 

//GET A USER 

router.get('/:id', async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        const {password,...others}=user._doc
        res.status(200).json(others)

    }catch(err){
        res.status(500).json(err)
    }
})







module.exports= router