// const express = require('express');
// const router = express.Router();
// // const {home, register} = require('../controllers/auth-controller');
// const authcontroller = require('../controllers/auth-controller');
// const signupSchema = require('../validators/auth-validator.js');
// const validate = require('../middlewares/validate-middleware');






// // router.get('/', (req, res) => {
// //     res.status(200).send("welcome to the server usind router")
// // })

// //used in controller
// // router.route("/").get(home); 

// router.route("/").get(authcontroller.home); //used in controller




// //other way

// // router.route('/register').get((req, res) => {
// //         res
// //         .status(200)
// //         .send("welcome to the registeration page using router")
// //     });


// // router.route("/register").get(register); //used in controller
// // router.route("/register").get(authcontroller.register); //used in controller

// router.route("/register").post( validate(signupSchema), authcontroller.register);// validate middleware to validate request body against the signup schema, then call the register controller method

// router.route("/login").post(authcontroller.login);

// module.exports = router;







const express = require('express');
const router = express.Router();
const authcontroller = require('../controllers/auth-controller');
const {signupSchema, loginSchema} = require('../validators/auth-validator.js');
const validate = require('../middlewares/validate-middleware.js');

// Home route
router.route("/").get(authcontroller.home);

// Registration route with validation middleware
router.route("/register").post(validate(signupSchema), authcontroller.register);

// Login route
// router.route("/login").post(authcontroller.login);
router.route("/login").post(validate(loginSchema), authcontroller.login);//using zod validation schema for login

module.exports = router;