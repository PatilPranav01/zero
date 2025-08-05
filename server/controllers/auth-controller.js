//part of code responsible for handling app's logic
//typically used to process requests, interact with databases, and send responses

const User = require("../models/user-model")
const bcrypt = require("bcryptjs");
//importing user model to interact with the database
//importing bcrypt for password hashing


//home

//whenever we use async function, we need to use try catch block
const home =  async (req, res) => {
    try {
        res
        .status(200)
        .send("welcome to the home page using controller");
    } catch (error) {
        console.log(error);
    }
}


const register = async (req, res) => {
    //console.log(req.body);
    // console.log(req.query); //for query params
    try {
        const { username, email, phone, password } = req.body; //destructuring

        const userExists = await User.findOne({ email: email });
        if (userExists) {
            return res.status(400).send("User already exists");
        }

        // //hashing the password
        // const saltRounds = 10;
        // const hash_password = await bcrypt.hash(password, saltRounds);

        //  const userCreated = await User.create({ 
        //     username,
        //     email,
        //     phone,
        //     password : hash_password
        // });//creating a new user

        //hashing the password
        const userCreated = await User.create({ 
            username,
            email,
            phone,
            password 
        });//creating a new user

        res
        .status(201)
        .json({
            // msg: userCreated, // ✅ send the created user object
            message: "User registered successfully",
            token: await userCreated.generateAuthToken(), // ✅ send token
            userId: userCreated._id.toString()            // ✅ send user ID
        });

        // .send("welcome to the registeration page using controller");
        // .send(req.body); //to send the data received from the client
    } catch (error) {
        // res.status(500).send("Internal Server Error");
        next(error); // pass the error to the next middleware (error handling middleware)
    }
}
//jwt mostly represented in string format

//user login logic
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExists = await User.findOne({ email });
        if (!userExists) {
            return res.status(400).send("User does not exist");
        }

        console.log("Input password:", password);
        console.log("DB password (hashed):", userExists.password);

        const isMatch = await userExists.comparePassword(password);
        console.log("Password match:", isMatch);

        if (isMatch) {
            res.status(200).json({
                message: "User login successfully",
                token: await userExists.generateAuthToken(),
                userId: userExists._id.toString()
            });
        } else {
            res.status(400).send("Invalid credentials");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = { home, register, login }; //exporting the functions to use in the router
