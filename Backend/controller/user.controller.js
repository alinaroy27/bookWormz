import User from "../model/user.model.js"
import bycryptjs from "bcryptjs"

export const signup= async(req,res)=>{
    try {
        const {fullname,email,password}=req.body;
        const  user = await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User already exits"})
        }
        const hashPassword = await  bycryptjs.hash(password,10)
        const createdUser = new User({
            fullname:fullname,
            email:email,
            password:hashPassword,
        })
        await createdUser.save()
        res.status(201).json({message:"User created Successfully", user:{
            _id: createdUser._id,
            fullname:createdUser.fullname,
            email:createdUser.email,
        }})
    } catch (error) {
        console.log("Error:" + error.message)
        return res.status(500).json({message:"Internal server error"})
    }
    console.log("Received body:", req.body);

}

export const login = async (req,res) =>{
    try {
        const {email,password} = req.body
        const user = await User.findOne({email})
        const isMatch = await  bycryptjs.compare(password, user.password)
        if(!user|| !isMatch){
            return res.status(400).json({message:"Invalid username or password"})
        }
        else{
            res.status(200).json({message:"Login Successfull", user:{
                _id:user._id,
                fullname:user.fullname,
                email: user.email
            }})
        }
    } catch (error) {
        console.log("Error:" +error.message)
        return res.status(500).json({message:"Internal server error"})
    }
}