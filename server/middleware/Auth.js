const ErrorHander = require("../utils/errorhander");

const jwt = require("jsonwebtoken");
const User = require("../models/modelRegster");

exports.chackAuth = async (req, res, next) => {
  const token= req.cookies
console.log(token)

  if (!token) {
    return next(new ErrorHander("Please Login to access this resource", 401));
  }

  const decodedData = jwt.verify(token,'jumusisir');
console.log(decodedData)
  req.user = await User.findById(decodedData.id);

  next();
}