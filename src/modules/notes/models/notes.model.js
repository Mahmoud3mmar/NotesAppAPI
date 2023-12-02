import { DataTypes } from "sequelize"
import sequelize from "../../../db/dbconnection.js"
import user from "../../users/models/user.model.js"



const task = sequelize.define('task',{

    id:{
        type:DataTypes.INTEGER(255),
        allowNull:false,
        autoIncrement:true,
        primaryKey: true
    
    },
    title:{
        type:DataTypes.STRING(255),
        allowNull:false
    },
    content:{
        type:DataTypes.STRING(255),
        allowNull:false
        
    },
    userID:{
        type:DataTypes.INTEGER(255),
        allowNull:false,
        
    }

})

user.hasMany(task,{foreignKey:'userID'})
task.belongsTo(user,{foreignKey:'userID',targetKey:'id'})


task.sync()

export default task


