import User from '../schema/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import formidable from 'formidable';
const saltRounds=10;

const userDetails= async (req, res) => {
    const user = await User.find().select("-password");
    res.send(user)
}

const register=async (req,res)=>{
    let email=req.body.email
    let user=await User.findOne({email:email})
    console.log(req.body);
    if(user){
        res.send({message:"email exists please enter a new mail id"})
    }
    else{
        bcrypt.hash(req.body.password,saltRounds,async(err,hash)=>{
            let registerUser=new User({
                name:req.body.name,
                email:email,
                password:hash,
                mobileNum:req.body.mobileNum
            })
            try {
                let result =await registerUser.save()
                res.send(result)               
            } catch (error) {
                console.log(error.message);
            }
        })      
    }    
}

const Login=async(req, res)=>{    
        const email=req.body.email;
        const exUser= await User.findOne({email:email})
        if(exUser){
            bcrypt.compare(req.body.password,exUser.password,(err,result)=>{
                if(result){
                    let data=exUser.toObject()
                    const token=jwt.sign({_id:data._id},"secret")
                    res.header("x-auth-token",token).send({message:"Login Successfull...!",isadmin:exUser.isAdmin})
                }else{
                    res.send("Access denied please enter a  valid password")
                }
            }) 
        }
        else{
          res.status(400).send('Your mail id not found')
        }      
}
 const upload=async(req,res)=>{
    try {
        upload(req, res, (error) => {
          if (error) {
            return res.status(400).json({ success: false, error });
          }
    
          return res.json({
            success: true,
            filePath: req.file.path,
            fileName: req.file.filename,
          });
        });
      } catch (err) {
        console.log(err);
      }
 }
 




// const upload=async(req,res)=>{
//     if(User.admin===true){
//         var upload=new formidable.IncomingForm();
//         upload.parse(req,function(err,fields,file)
//             res.send("File Uploaded Successfully...")
//         }
//     }


export default {register,Login,userDetails};