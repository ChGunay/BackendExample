const User = require('../models/user');

const register  = async(req, res, next) =>{
    // POST DATA
    const name  = "John DOE";
    const email = "johndoe@gmail.com";
    const password = "12345";

    //async,await

    try {
        const user = await User.create({

            name,
            email,
            password
    
        });
    
        res
        .status(200)
        .json({
            succes: true,
            data : user
        });
        
    } catch (err) {
        return next(err);// customErrorHandler tarafının oluşan hatayı yakalayabilmesi için bu yapı oluşturuldu
    }
   


};

const errorTest = (req, res, next) => {
    throw new Error("Bir hata oluştu")
};


module.exports = {
    register,
    errorTest
};