const Sequelize=require('sequelize')

const sequelize=new Sequelize('nodeSQL','rishav','89018901',{
    dialect:'mysql',
    host:'localhost'})

module.exports=sequelize;