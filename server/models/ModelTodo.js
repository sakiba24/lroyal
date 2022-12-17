const mongoose = require('mongoose');

const Todo= new mongoose.Schema({
   fname:{type:String},
   lname:{type:String},
   age:{ type: Number}
   
    });
  module.exports = mongoose.model('todoapp', Todo);
  
  
