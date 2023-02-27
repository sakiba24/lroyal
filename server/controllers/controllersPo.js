const modelPo = require('../models/PoSet')
const ErrorHander = require("../utils/errorhander");
const { v4: uuidv4 } = require('uuid');


exports.poset = async (req, res, next) =>{
  const {po,beyer} = req.body
  
  
  
  const chackpo = await modelPo.findOne({po})
  console.log(chackpo)
  if(chackpo){
    return next(new ErrorHander('Po already exist',400))
  }
  const data = new modelPo({po,beyer})
  const result = await data.save()
  
  if(result){
    return res.send(result)
  }
}


exports.poitemset = async (req, res, next) =>{
  const {id} = req.params
  const {image,color,item,style,sizename} = req.body
  
  const file = req.file
  console.log(file)
  
  
  const obj = {
    item_id: uuidv4(),
    image,
    color,
    item,
    style,
    sizename
  }
  const result = await modelPo.findOne({_id:id})
  result.item.push(obj)
  result.save()
  res.send(result)
  console.log(result)
}