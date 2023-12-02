import { DataTypes } from "sequelize"
import sequelize from "../../../db/dbconnection.js"
// import {seedDatabase} from '../../../db/seed.js'


const user = sequelize.define('user',{

    id:{
        type:DataTypes.INTEGER(255),
        allowNull:false,
        autoIncrement:true,
        primaryKey: true
    
    },
    name:{
        type:DataTypes.STRING(255),
        allowNull:false
    },
    email:{
        type:DataTypes.STRING(255),
        allowNull:false,
        unique:true,
        validate:{
            isEmail: true
        }
    },
    age:{
        type:DataTypes.INTEGER(255),
        allowNull:false,
        
    },
    password:{
        type:DataTypes.INTEGER(255),
        allowNull:false,
        // validate:{
        //     ispasswordvalid(value){
        //         const regex=''
        //         if(!regex.test(value)){
        //             throw new error ("password doesnt meet criteria!!!")
        //         }
        //     }
        // }
    }

})




user.sync()
// seedDatabase
export default user


