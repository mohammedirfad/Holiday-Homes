import jwt from "jsonwebtoken";


export const generateToken = (userId,status) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET_KEY,{expiresIn:"1hr"});
  return token;
};
