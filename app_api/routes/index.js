const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');


//get bus list
router
    .route('/buses')
    .get(ctrlMain.getBusList)
