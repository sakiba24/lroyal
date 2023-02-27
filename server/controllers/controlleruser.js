const regsters = require('../models/modelRegster')
const ErrorHander = require("../utils/errorhander");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');


exports.regster = async (req, res, next) => {

	const {fname, lname,username,password} = req.body
	console.log(req.body)
	 const result  = await regsters.findOne({username})
	 console.log('find',result)
	 if(result){
	   console.log('email exit')
       	return next(new ErrorHander('email exit',400))
	   
	 }
	
	const pass = await bcrypt.hash(password,10)
	
	const Regster = new regsters({fname,lname,username, password:pass})
	
	const data = await Regster.save()
	if(data){
	  return res.send('regster successful')
	}
	   
}

exports.login = async (req, res, next) => {
  
  const {username,password} = req.body
  
  const user = await regsters.findOne({username})
  if (!user) {
    return next(new ErrorHander("Invalid email or password", 401));
  }
  
  if(user){
    let chack = bcrypt.compare(password,user.password)
    if(!chack){
      return next(new ErrorHander("Invalid email or password", 401));
    }
    
  }
      
      const options = {
    expires: new Date(
      Date.now() + 3000 * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
const token = jwt.sign({user,expires: new Date(
      Date.now() + 3000 * 24 * 60 * 60 * 1000
    ),},'jumusisir')
  return res.status(200).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
    
}

exports.logout = async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
}

