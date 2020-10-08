const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const MovieSchema=new Schema({
    poster_link:{
        type:String,
        required:true
    },
    movie_name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    movie_details:{
        type:String,
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})
module.exports=mongoose.model('Movies',MovieSchema);

// const Sequelize=require('sequelize');
// const sequelize=require('../utils/mysql');

// const Movies=sequelize.define('movies',{
//     id:{
//         type:Sequelize.INTEGER,
//         autoIncrement:true,
//         allowNull:false,
//         primaryKey:true
//     },
//     poster_link:{
//         type:Sequelize.STRING,
//         allowNull:false
//     },
//     movie_name:{
//         type:Sequelize.STRING,
//         allowNull:false
//     },
//     movie_details:{
//         type:Sequelize.STRING(1000),
//         allowNull:false
//     },
//     price:{
//         type:Sequelize.DOUBLE,
//         allowNull:false
//     }
// })

// module.exports=Movies;