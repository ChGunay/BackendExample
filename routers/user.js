const express = require("express");
const router = express.Router();
const {getSingleUser, getAllUsers,editDetails,deleteUser} = require("../controllers/user.js")

router.get("/:id", getSingleUser);
router.get("/", getAllUsers);
router.put("/edit/:id", editDetails)
router.delete("/delete/:id", deleteUser)

//Put user


module.exports = router;