import jwt from "jsonwebtoken";

const exsureAuthenticated = async (req, res, next) => {
  const auth = req.headers["authorization"];
  if (!auth) {
    return res.status(401).json({
      message: "Unauthorized, JWT token is require",
    });
  }
  try {
    const decoded = jwt.verify(auth, process.env.JWT_secret);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized, JWT token is wrong or expired",
    });
  }
};

export default exsureAuthenticated;
