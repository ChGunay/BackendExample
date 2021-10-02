const CustomError = require('../../helpers/error/CustomError')
const customErrorHandler = (err, req, res, next) => {

    let customError = err;
    
    if(err.name === "SyntaxError"){
        customError = new CustomError("Unexpected Syntax", 400)

    }
    if(err.name === "ValidationError"){ // Girilen değerlerde oluşabilecek herhangi bir hata yakalandığında etkin olacak.
        customError = new CustomError(err.message, 400);
    }

    if(err.name === "CastError"){
        customError = new CustomError("Pleas provide a valid id", 400);

    }
 
  
    res
    .status(customError.status || 500) //yakalanan hatanın statüsü yoksa servis hatası olarak 500 gözüksün
    .json({
        success: false,
        message: customError.message
    });
};


module.exports = customErrorHandler;