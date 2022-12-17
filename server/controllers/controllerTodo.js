const Todo = require('../models/ModelTodo')

exports.TodoInsart = async (req, res) => {
	
	const {fname, lname} = req.body
	
	const age =parseInt(req.body.age)
	const todo = new Todo({fname,lname,age})
	
	const data = await todo.save()
	
	if(data){
	res.send(data)
	}
}

exports.TodoGet = async (req, res) => {
	
	const data = await Todo.find({})

	if(data){
	res.send(data)
	}
}


exports.TodoDelete = async (req, res) => {
	const {id}= req.params
	
	const data = await Todo.deleteOne({_id:id})
	console.log(data)
	if(data){
	res.send(data)
	}
}



exports.TodoUpdate = async (req, res) => {
	const {ids,fname,lname,age}= req.body
	
	const data = await Todo.findOneAndUpdate({_id:ids},{$set:{fname:fname,lname:lname,age:age}},{returnOriginal:false} )
	
	if(data){
	res.send(data)
	}
}


