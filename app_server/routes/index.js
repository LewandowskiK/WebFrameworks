var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');

/* GET homepage */
router.get('/', ctrlMain.login);

/* GET registration page*/
router.get('/register', ctrlMain.register);   

/*GET bus listing page*/
router.get('/buses', ctrlMain.buses);

module.exports = router;
