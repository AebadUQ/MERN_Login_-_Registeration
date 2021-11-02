import express from 'express';
import cors from 'cors';
import mongoose from'mongoose';
//mongo mai koi model ce]reate k leye ehly schema us sy model aur us sy doc banaein k kitny user etc;
const app = express();
app.use(express.json());
app.use(express.urlencoded())
app.use(cors());

mongoose.connect('Your_Mongodb_url',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
},()=>{
    console.log("Db connected")
;});


const userSchema=mongoose.Schema({
    stdid:String,
    name:String,
    email:String,
    password:String
})


//model 
const User = new mongoose.model("User",userSchema)
// Routers here
app.get('/',(req,res)=>{
    res.send("my api .")
})

app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password === user.password){
                res.send({message:"logged in",user:user})
            }
            else{
                res.send({message:"incorrect password"})
            }
        }
        else{
            res.send({message:"User not registered .."})
        }
    })
   // res.send("my api login")
})
app.post('/register',(req,res)=>{
    const {name,email,password} = req.body;
    //user alrady exist or not
    //callback mai 2 chex err and user
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"user already registered"})
        }
        else{
            const user=new User({
                name,
                email,
                password
               })
               user.save(err=>{
                   if(err)
                   {
                       res.send(err);
                   }
                   else{
                       res.send({message:"sucessfully registered"})
                   }
               })
           
        }
    })
    
  //  console.log(req.body)
})

app.listen(9008,()=>{
    console.log("started at port 9008")
})