const express       =   require('express')
const ejs           =   require('ejs')
const path          =   require('path')
const bodyParser    =   require('body-parser')
const app           =   express()
const adminRoutes   =   require('./routes/admin')
const userRoutes    =   require('./routes/user')
const mongoose      =   require('mongoose')
const User          =   require('./model/user')
//const sequelize     =   require('./utils/mysql')
//const Users         =   require('./model/user')
//const Product       =   require('./model/movieList')

app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:true}));
app.use((req,res,next)=>{
    User.findById("5f7d734059934a2f2965842b")
    .then(user =>{
        req.user=user
        console.log(req.user._id)
        next()
    })
    .catch(err => console.log(err))
})
app.use('/',adminRoutes)
app.use('/admin',adminRoutes)
app.use('/',userRoutes)

mongoose.connect("mongodb://localhost:27017/nodeSQL",{useNewUrlParser:true})
.then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'Rishav',
          email: 'rsaha0907@gmail.com',
          cart: {
            items: []
          }
        });
        user.save();
      }
    });
    app.listen(5000);
  })
  .catch(err => {
    console.log(err);
  });