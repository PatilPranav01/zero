const Contact = require('../models/contact-model.js'); // Importing Contact model

const contactForm = async (req, res) => {
    try {
        const { username, email, message } = req.body; // Destructure to be safe

        // Validate required fields (optional but recommended)
        if (!username || !email || !message) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Save to DB and get the created document
        const contact = await Contact.create({ username, email, message });

        return res.status(201).json({
            message: "Contact form submitted successfully",
            data: contact  // ✅ Return DB document, not just req.body
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = contactForm; // ✅ export the function
