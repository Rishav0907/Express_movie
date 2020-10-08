const Movies=require('../model/movieList')


exports.rootPage=(req,res)=>{
    res.redirect('/admin/add-movie')
}

exports.getAddMovie=(req,res,next)=>{
    res.render('add-movie')
}
exports.postAddMovie=(req,res,next) =>{
    let link    =   req.body.link
    let name    =   req.body.name
    let price   =   req.body.price
    let details =   req.body.details
    console.log(link)
    console.log(name)
    console.log(price)
    console.log(details)
    const movie=new Movies({
        poster_link:link,
        movie_name:name,
        price:price,
        movie_details:details,
        userId:req.user._id
    })
    movie.save()
    .then(movie=>{
        res.redirect('add-movie')
        console.log('Movie created')
    })
    .catch(err => console.log(err))
}
exports.showMovie=(req,res,next)=>{
    Movies.find()
    //.populate('userId')
    .then(result =>{
        console.log(result)
        res.render('show-movie',{
            movieList:result
        })
    })
    .catch(err => console.log(err))
} 
exports.showDetails=(req,res,next)=>{
    movieId=req.params.movieId
    console.log(movieId)
    Movies.findById(movieId)
    .then(result =>{
        res.render('eachMovieDetail',{
            movieDetail:result
        })
    })
    .catch(err => console.log(err))
}
exports.DeleteMovie=(req,res,next)=>{
    movieId=req.params.movieId;
    Movies.findByIdAndDelete(movieId)
    .then(result =>{
        console.log(`Product with id ${movieId} deleted`);
        res.redirect('/')
    })
    .catch(err =>{
        console.log(err);
    })
}
exports.getEditMovie=(req,res,next)=>{
    movieId=req.params.movieId;
    console.log(movieId)
    Movies.findById(movieId)
    .then(movie =>{
        // console.log(movie.poster_link)
        res.render('editMovieDetails',{
            movie:movie
        })
    })
    .catch(err => console.log(err));
}

exports.postEditMovie=(req,res,next)=>{
    let movieId=req.params.movieId;
    let link=req.body.link
    let name=req.body.name
    let price=req.body.price
    let details=req.body.details;
    Movies.findById(movieId)
    .then(movie =>{
        movie.poster_link=link;
        movie.movie_name=name;
        movie.price=price;
        movie.movie_details=details;
        return movie.save()
    })
    .then(result =>{
        console.log('Movie updated');
        res.redirect('/');
    })
    .catch(err => console.log(err));
}

exports.getCart=(req,res,next)=>{
    res.render('cart')
}