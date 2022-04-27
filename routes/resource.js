var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var sweetmagic_controller = require('../controllers/sweetmagic');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// bakery ROUTES ///
// POST request for creating a bakery.
router.post('/sweetmagic', sweetmagic_controller.sweetmagic_create_post);
// DELETE request to delete bakery.
router.delete('/sweetmagic/:id', sweetmagic_controller.sweetmagic_delete);
// PUT request to update bakery.
router.put('/sweetmagic/:id', sweetmagic_controller.sweetmagic_update_put);
// GET request for one bakery.
router.get('/sweetmagic/:id', sweetmagic_controller.sweetmagic_detail);
// GET request for list of all bakery items.
router.get('/sweetmagic', sweetmagic_controller.sweetmagic_list);
module.exports = router;