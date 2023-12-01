

import notes from '../models/task.model.js'


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



export{
    GetAllNotes,
    AddNote
}