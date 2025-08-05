const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,   
    },
    email: {
        type: String,
        required: true,   
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})


//hashing the password before saving it to the database
userSchema.pre('save', async function(next){
    const User = this;
    // Check if the password is modified before hashing
    // This prevents re-hashing if the password is not changed
    if (!User.isModified('password')) {
        return next(); // ✅ only skip if not modified
    }

    try {
        // const saltRounds = 10;
        const saltRounds = await bcrypt.genSalt(10);
        // Hash the password using bcrypt
        const hash_password = await bcrypt.hash(User.password, saltRounds);
        // Save the hashed password to the database
        User.password = hash_password;
        next(); // ✅ continue saving
    } catch (error) {
        next(error); // ✅ handle errors properly
    }
})

// compare the password with the hashed password
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password); 
    // ✅ compare the plain password with the hashed password
}






//json web token

//with help of methods, we can add custom methods to the schema
userSchema.methods.generateAuthToken = async function() {
    try {
        //returning the token
        return jwt.sign({
            userId: this._id.toString(), //id ko string me convert krna h then pass krna h
            email: this.email, 
            isAdmin: this.isAdmin
        }, process.env.JWT_SECRET, {
            expiresIn: '1h' //token will expire in 1 hour
        });
    } catch (error) {
        console.log(error);
    }
}






//define the model name or collection name
const User = mongoose.model('User', userSchema);

module.exports = User;



//jwt used for authentication and authorization
//authentication is the process of verifying the identity of a user
//authorization is the process of verifying the permissions of a user

//header , payload, signature
//header contains the algorithm used to sign the token
//payload contains the data to be sent to the client
//signature is used to verify the authenticity of the token

//jsonwebtoken is used to create and verify the token
//stored in the client side(localStorage, sessionStorage, cookies)
