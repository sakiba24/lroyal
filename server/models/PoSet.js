const mongoose = require('mongoose');

const pos = new mongoose.Schema({
   po:{type:String,require:true},
   beyer:{type:String,require:true},
   item:[{
     item_id:String,
     image:String,
     color:String,
     item:String,
     style:String,
     sizename:[],
     qty:[],
     hourdata:[],
     
     createdAt:{type: Date, default: Date.now}
    
   }],
   
   createdAt:{type: Date, default: Date.now}
    });
  module.exports = mongoose.model('po', pos);
  
  
