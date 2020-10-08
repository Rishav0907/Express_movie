const addMovieController=require('../controllers/movieController');
const express=require('express')
const router=express.Router()
router.get('/show-movie/:movieId',addMovieController.showDetails);
router.get('/cart',addMovieController.getCart);
module.exports=router;