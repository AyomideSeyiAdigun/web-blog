const express = require('express');
const app = express();
const multer = require('multer')
const PORT = 5000;
const mongoose = require('mongoose');
var cors = require('cors');
app.use(cors());

const dotenv = require('dotenv');
dotenv.config();
app.use(express.json());

const authRoute= require('./routes/auth');
const usersRoute= require('./routes/users');
const postsRoute= require('./routes/posts');
const categoriesRoute= require('./routes/categories');



mongoose.connect(process.env.URL2).then(console.log('connected to mongoDB'))
  .catch((err)=>console.log(err))


  const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,"images");
    },
    filename:(req,file,cb)=>{
      cb(null,req.body.name)
    },
  })

  const upload = multer ({storage:storage});

  app.post('/api/upload',upload.single("file"), (req,res)=>{
    res.status(200).json("file has been uploaded")
  })

app.get('/',(req,res)=>{ 
    res.send('hello world!')
})
app.use('/api/auth',authRoute);
app.use('/api/users',usersRoute);
app.use('/api/posts',postsRoute);
app.use('/api/categories',categoriesRoute)

app.listen(PORT,()=>{
    console.log('backend is running')
})