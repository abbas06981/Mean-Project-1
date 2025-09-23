const jwt = require("jsonwebtoken");

const JWT_SECRET = "ThisIsMySecretKey"; // ⚠️ use .env in real projects

const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "No token, authorization denied" });
        }

        const token = authHeader.split(" ")[1];

        // Verify token
        const decoded = jwt.verify(token, JWT_SECRET);

        // Attach user info
        req.user = decoded;

        next(); // continue request
    } catch (error) {
        // ✅ Proper error handling
        console.error("Auth Error:", error.message);

        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token expired, please log in again" });
        }

        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({ message: "Invalid token" });
        }

        return res.status(500).json({ message: "Authentication error" });
    }
};

module.exports = authMiddleware;
