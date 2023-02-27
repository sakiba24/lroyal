const express = require('express')
const {regster,login,logout} = require('../controllers/controlleruser')


const router = express.Router();

router.route('/regster').post(regster)
router.route('/login').post(login)
router.route("/logout").get(logout)

module.exports = router
