var express = require('express');
var router = express.Router();


const {
    homePageCtrl,
} = require('../controllers');


/* GET home page. */
router.get('/', homePageCtrl);

module.exports = router;