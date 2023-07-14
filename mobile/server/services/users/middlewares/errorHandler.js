const errorHandler = (error, req, res, next) => {
    if (error.name === "Data not found") {
        res.status(404).json({ message: "Data not found" });
    } else if (error.name === "Invalid Input") {
        res.status(401).json({ message: "Please check your inputs" });
    } else {
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { errorHandler };
