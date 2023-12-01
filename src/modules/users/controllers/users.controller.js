
import user from '../models/user.model.js'
const { Op } = require("sequelize");




const GetAllUsers= async (req,res)=>{
    try{
       const data = await user.findAll()
       res.json({data})
       
    }catch(error){
        res.status(500).json({error})
    }
}

const SignUp= async (req,res)=>{
    try{
       const {name,email,password,age}=req.body
       const data = await user.create({
        name,
        email,
        password,
        age
       })
       res.status(201).json({json})
       res.json({data})
       
    }catch(error){
        res.status(500).json({error})
    }
}

const UpdateUser= async (req,res)=>{
    try{
        const {id}=req.params     
        const {name,email,password,age}=req.body
        const data = await user.update({
            name,
            email,
            password,
            age
        },{
            where:{
                id
            }
        })
        
        res.json({data})
       
    }catch(error){
        res.status(500).json({error})
    }
}
const DeleteUser= async (req,res)=>{
    try{
        const {id}=req.params     
        const {name,email,password,age}=req.body
        const data = await user.destroy({
            where:{
                id
            }
        })
        
        res.json({data})
       
    }catch(error){
        res.status(500).json({error})
    }
}

const SearchUser= async (req,res)=>{
    try{
       const data = await user.findOne({
        where:{
            name: {
                [Op.like]: 'a%'
              },
              age: {
                [Op.lt]: 30
            }
        }
        })
       res.json({data})
       
    }catch(error){
        res.status(500).json({error})
    }
}

export {
    GetAllUsers,
    SignUp,
    UpdateUser,
    DeleteUser,
    SearchUser
}