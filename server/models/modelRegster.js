const mongoose = require('mongoose');

const regsters = new mongoose.Schema({
   fname:{type:String},
   lname:{type:String},
   username:{ type:String},
   password:{type:String}
   
    });
  module.exports = mongoose.model('production_user', regsters);
  
  
