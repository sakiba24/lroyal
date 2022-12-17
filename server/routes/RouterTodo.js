const express = require('express')
const {TodoInsart,TodoGet, TodoDelete, TodoUpdate} = require('../controllers/controllerTodo')



const router = express.Router();

router.route('/todosetname').post(TodoInsart).get(TodoGet)
router.route('/tododelete/:id').delete(TodoDelete)

router.route('/todoedite').put(TodoUpdate)


module.exports = router
