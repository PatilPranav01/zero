const express = require('express');
const router = express.Router();
// const {home, register} = require('../controllers/auth-controller');
const authcontroller = require('../controllers/auth-controller');






// router.get('/', (req, res) => {
//     res.status(200).send("welcome to the server usind router")
// })

//used in controller
// router.route("/").get(home); 

router.route("/").get(authcontroller.home); //used in controller




//other way

// router.route('/register').get((req, res) => {
//         res
//         .status(200)
//         .send("welcome to the registeration page using router")
//     });


// router.route("/register").get(register); //used in controller
// router.route("/register").get(authcontroller.register); //used in controller

router.route("/register").post(authcontroller.register);



module.exports = router;