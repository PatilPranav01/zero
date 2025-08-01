const mongoose = require('mongoose');

const URI = "mongodb+srv://pranav:sai123456@cluster0.e3mdpur.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
