const errorMiddleware = (err, req, res, next) => {
const status = err.status || 500; // Default to 500 if status is not set
const message = err.message || 'Backend error'; // Default message
const extradetails = err.extradetails || 'Something went wrong'; // Additional details

return res.status(status).json({ message, extradetails });
}

module.exports = errorMiddleware;