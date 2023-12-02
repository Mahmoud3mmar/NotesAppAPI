
import user from '../models/user.model.js'
import { Op } from 'sequelize'




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
            name: name,
            email: email,
            password: password,
            age: age
       })

       res.status(201).json({success: true, data })
       
    }catch(error){
        res.status(500).json({error})
    }
}


const SignIn= async (req,res)=>{
    try{
       const {email,password}=req.body
       const data = await user.findOne({
        where:{
            email:email,
            password:password
        }
       })

       // Check if a user was found
       if (data) {
        // Respond with a success status and the user data
        res.status(200).json({ success: true, data });
        } else {
        // Respond with a failure status and a message indicating user not found
        res.status(404).json({ success: false, message: 'User not found' });
         }

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

const SearchUserLike= async (req,res)=>{
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


const SearchUser= async (req,res)=>{
    try{
       const data = await user.findOne({
        where:{
            
            age: {
                [Op.between]: [20,30]
                
            }
        }
        })
       res.json({data})
       
    }catch(error){
        res.status(500).json({error})
    }
}


const SearchUserIN= async (req,res)=>{
    try{
       const data = await user.findOne({
        where:{
            
            age: {
                [Op.in]:[1,2]
                
            }
        }
        })
       res.json({data})
       
    }catch(error){
        res.status(500).json({error})
    }
}


const SearchUserOldest= async (req,res)=>{
    try{
        const data = await user.findAll({
        order: [['age', 'DESC']],
        limit: 3,
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
    SearchUserLike,
    SearchUser,
    SearchUserIN,
    SearchUserOldest,
    SignIn
}