

import notes from '../models/notes.model.js'
import users from '../../users/models/user.model.js'


const GetAllNotes = async (req,res)=>{
    try{
       const data = await notes.findAll()
       res.json({data})
       
    }catch(error){
        res.status(500).json({error})
    }
}
const AddNote= async (req,res)=>{
    try{
        const {title,content,userID}=req.body
        const data = await notes.create({
            title,
            content,
            userID
        })
        res.json({data})
        
    }catch(error){
        res.status(500).json({error})
    }
}

const GetAllNotesWithOwner = async (req,res)=>{
    try{
        
        const data = await notes.findAll({
            include:users
        })
        res.json({data})
       
    }catch(error){
        res.status(500).json({error})
    }
}

const DeleteNote= async (req,res)=>{
    try{
        const {id}=req.params     
        const data = await notes.destroy({
            where:{
                id:id
                
            },
        })
        
        res.json({data})
       
    }catch(error){
        res.status(500).json({error})
    }
}

const UpdateNote= async (req,res)=>{
    try{
        const {id}=req.params     
        const {title,content,userID}=req.body
        const data = await notes.update({
            title,
            content,
            userID,
            where:{
                id:id
                
            },
        })
        
        res.json({data})
       
    }catch(error){
        res.status(500).json({error})
    }
}




export{
    GetAllNotes,
    AddNote,
    GetAllNotesWithOwner,
    DeleteNote,
    UpdateNote
}