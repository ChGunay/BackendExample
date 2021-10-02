const User = require("../models/user");
const CustomError = require("../helpers/error/CustomError")
const asyncErrorWrapper = require("express-async-handler") // yakalanan hatanın CustomErrorHandler atanamsı için hazır fonksiyon dahil edildi

const getSingleUser =  asyncErrorWrapper(async(req, res, next) =>{
    const{id}= req.params;

    const user = await User.findById(id)

    if(!user){

        return next(new CustomError("There is no such user with that id", 400))
    }

    return res.status(200)
    .json({
        succes: true,
        data: user
    });



});

const getAllUsers =  asyncErrorWrapper(async(req, res, next) =>{
    const user = await  User.find();
    return res.status(200)
    .json({
        succes: true,
        data: user
    });
});

const editDetails  = asyncErrorWrapper(async(req, res, next) =>{
    const editInformatıon = req.body;
    const user  = await User.findByIdAndUpdate({_id:req.params.id}, editInformatıon,{
        new: true,
        runValidators: true
    });
    return res.status(200)
    .json({
        succes: true,
        data: user
    });

});

const deleteUser =  asyncErrorWrapper(async(req, res, next) =>{
    const{id} = req.params;
    const user = await User.findById(id);
    await user.remove();

    return res.status(200)
    .json({
        succes: true,
        message: "Delete Operation Succesful"
    }); 

});


module.exports = {
    getSingleUser,
    getAllUsers,
    editDetails,
    deleteUser
    
};  