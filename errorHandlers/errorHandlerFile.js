const errorHandler = (err,req,res,next) =>{
    // console.log(err)
    res.status(500).json({message : err.message})
    // res.status(500).send(err.message)
}


module.exports = errorHandler