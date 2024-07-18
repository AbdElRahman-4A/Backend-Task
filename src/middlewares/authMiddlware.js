import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");

  if (!token) {
    return res.status(409).json({ message: "not FoundToken" });
  }
  try {
    const decoded = jwt.verify(
      token,
      process.env.TOKEN_SIGNATURE || "SecretKey"
    );

    if (typeof decoded === "object" && "id" in decoded) {
      req.token = decoded;
      next();
    } else {
      return res.status(409).json({ message: "Invalid token " });
    }
  } catch (error) {
    return res.status(409).json({ message: "Invalid token" });
  }
};
