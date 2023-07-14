const errorHandler = (error, req, res, next) => {
    if (
        error.name === "SequelizeValidationError" ||
        error.name === "SequelizeUniqueConstraintError"
    ) {
        res.status(400).json({
            message: `Please check your input`,
        });
    } else if (error.name === "Invalid email/password") {
        res.status(400).json({ message: "Invalid email/password" });
    } else if (error.name === "Data not found") {
        res.status(404).json({message: "Data not found"})
    } else if (error.name === "Invalid Token") {
        res.status(403).json({message: "You are Unauthorized"})
    } else {
        res.status(500).json({message: "Internal Server Error"})
    }
};

module.exports = { errorHandler };