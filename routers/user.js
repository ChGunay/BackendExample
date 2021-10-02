const express = require("express");
const router = express.Router();
const {getSingleUser, getAllUsers,editDetails} = require("../controllers/user.js")

router.get("/:id", getSingleUser);
router.get("/", getAllUsers);
router.put("/edit/:id", editDetails)

//Put user


module.exports = router;