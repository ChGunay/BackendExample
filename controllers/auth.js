const User = require('../models/user');
const CustomError = require("../helpers/error/CustomError")
const asyncErrorWrapper = require("express-async-handler") // yakalanan hatanın CustomErrorHandler atanamsı için hazır fonksiyon dahil edildi

const register  = asyncErrorWrapper(async(req, res, next) =>{
    // POST DATA


    //async,await
    console.log(req.body); 
    const {name,email,password,role} = req.body;

        const user = await User.create({

            name,
            email,
            password,
            role
    
        });
    
        res
        .status(200)
        .json({
            succes: true,
            data : user
        });
        
    


});

const errorTest = (req, res, next) => {
   return next( new SyntaxError("Syntax Error"));
};

module.exports = {
    register,
    errorTest

};