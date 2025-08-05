const validate = (schema) => async (req, res, next) => {
    try {
        const parsed = await schema.safeParseAsync(req.body);

        if (parsed.success) {
            req.body = parsed.data;
            return next();
        }

        // If validation fails, send formatted response
        const status = 422; // Unprocessable Entity
        const message = "Fill the input properly";
        const extraDetails = parsed.error.issues[0].message;

        const error = {
            status,
            message,
            extraDetails,
        };

        res.status(status).json(error);
    } catch (err) {
        console.error("Unexpected error in validation middleware:", err);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

module.exports = validate;
