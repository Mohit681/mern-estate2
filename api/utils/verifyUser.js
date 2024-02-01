import jwt from 'jsonwebtoken'

export const verifyToken = (req,res,next) =>{
   const token = req.cookies.access_token;
   if(!token) {
      return next(errorHandler(401,'Unauthorized'));
   }
   jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
    if(err) {
      return next(errorHandler(403,'Forbidden'));
    }
    console.log(user);
    // Storing the decoded JWT payload in the request object for further use
    req.user=user;
    next();
   })
};