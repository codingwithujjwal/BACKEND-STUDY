const jwt = require("jsonwebtoken");

async function authArtistMiddleware(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorize" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "artist") {
      return res.status(403).json({
        message: "You don't have access",
      });
    }


    req.user=decoded

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
}

async function authUser(req,res,next) {
  

  const token = req.cookies.token;

if (!token) {
  res.status(401).json({
    message:"Unauthorize"
  })
  }
  

try {
  
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (decoded.role!=="user") {
    res.status(401).json({
      message:"You don't have access"
    })
  }



  req.user = decoded;

  next()



} catch (error) {
  res.status(401).json({
    message:"Unauthorized"
  })
}





}

module.exports = {
  authArtistMiddleware,
  authUser
}