const adminAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(403).json("Forbidden: No token");
  }

  const token = authHeader.split(" ")[1]; // 👈 extract after Bearer

  if (token !== process.env.ADMIN_SECRET) {
    return res.status(403).json("Forbidden: Invalid token");
  }

  next();
};

export default adminAuth;
