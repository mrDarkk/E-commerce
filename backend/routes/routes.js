const router = require("express").Router();
const user = require('../controller/user.controller.js');

// public  route

// register route
router.post("/register", user.register);

// login route
router.post("/login", user.login);


module.exports = router;