const { verify } = require("jsonwebtoken");

// Creates a Guard to dennegate/authorize the user
function userGuard(req, res, next) {
    // Captures Authorization header 
    const { authorization } = req.headers;
    // Checks if it has the Authorization header
    if (!authorization) {
        // Return error 403, if header wasn't sent 
        next(res.status(403).json({ status: "error", msg: "NOT AUTHORIZED" }));
    }
    try {
        // Grabs the token from the Authorization header.
        const token = authorization.split(" ")[1];
        // Takes the payload from the token
        const payload = verify(token, process.env.JWT_SECRET_KEY);
        // Verifies the role of the user, admitting only admins. 
        if (payload.rol !== "admin") {
            next(res.status(403).json({ status: "error", msg: "USER NOT AUTHORIZED" }));
        }
    } catch (error) {
        console.log(error);
        next(res.status(500).json({ status: "error", msg: "An error ocurred" }));
    }
    // Pasa a ejecutar la API
    next();
}

exports.userGuard = userGuard