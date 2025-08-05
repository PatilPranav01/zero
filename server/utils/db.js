const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI ;

const connectDB = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        
        });

        console.log(" MongoDB connected successfully");
    } catch (error) {
        console.error(" MongoDB connection failed:", error.message);
        process.exit(1); // Exit with failure
    }
};

module.exports = connectDB;
