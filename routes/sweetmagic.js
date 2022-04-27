
var express = require('express');
const sweetmagic_controlers= require('../controllers/sweetmagic');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sweetmagic', { title: 'Search Results sweetmagic class' });
});



//var express = require('express');
//const sweetmagic_controlers= require('../controllers/sweetmagic');
var router = express.Router();
/* GET costumes */
router.get('/', sweetmagic_controlers.sweetmagic_view_all_Page );
module.exports = router;

module.exports = router;

/* GET detail bakery page */
router.get('/detail', sweetmagic_controlers.sweetmagic_view_one_Page);

/* GET create bakery page */
router.get('/create',secured, sweetmagic_controlers.sweetmagic_create_Page);
//router.get('/create',sweetmagic_controlers.sweetmagic_create_Page);


/* GET create update page */
router.get('/update',secured, sweetmagic_controlers.sweetmagic_update_Page);
//router.get('/update',sweetmagic_controlers.sweetmagic_update_Page);

/* GET create bakery page */
router.get('/delete',secured, sweetmagic_controlers.sweetmagic_delete_Page);

//router.get('/delete',sweetmagic_controlers.sweetmagic_delete_Page);

