const express=require('express')
const router=express.Router()
const addMovieController=require('../controllers/movieController')


router.get('',addMovieController.rootPage)
router.get('/add-movie',addMovieController.getAddMovie)
router.post('/add-movie',addMovieController.postAddMovie)
router.get('/show-movie',addMovieController.showMovie)
router.get('/show-movie/delete/:movieId',addMovieController.DeleteMovie);
router.get('/show-movie/edit/:movieId',addMovieController.getEditMovie);
router.post('/show-movie/edit/:movieId',addMovieController.postEditMovie);
 module.exports=router