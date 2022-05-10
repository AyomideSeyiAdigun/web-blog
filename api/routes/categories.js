const router  = require("express").Router();
const User = require('../models/Category');
const jwt = require('jsonwebtoken');
const Category = require("../models/Category");


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

// CREATE A CATEGORY
router.post('/', authenticateToken, async (req,res)=>{
    const newCat = new Category(req.body);
    try {
        const savedCat = await newCat.save();
        res.status(200).json(savedCat);

    } catch (err) {
        res.status(500).json(err)
    }


})


//GET ALL CATEGOTIRES

router.get('/',async (req,res)=>{
    try {
        const cats = await Category.find();
        res.status(200).json(cats);

    } catch (err) {
        res.status(500).json(err)
    }


})














module.exports= router