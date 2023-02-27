const express = require('express')
const {poset,poitemset} = require('../controllers/controllersPo')
const {chackAuth} = require('../middleware/Auth')



const router = express.Router();

router.route('/poset').post(poset)
router.route('/poitemset/:id').post(poitemset)

module.exports = router