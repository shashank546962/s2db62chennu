/*
var sweetmagic = require('../models/sweetmagic');
// List of all sweetmagic items
exports.sweetmagic_list = function(req, res) {
 res.send('NOT IMPLEMENTED: sweetmagic list');
};

*/
var sweetmagic = require('../models/sweetmagic');
// List of all bakerys
exports.sweetmagic_list = async function(req, res) {
    try{
        thesweetmagic = await sweetmagic.find();
        res.send(thesweetmagic);
    }
    catch(err){
        res.error(500,`{"error": ${err}}`);
    }
    
};

// for a specific sweetmagic item.
exports.sweetmagic_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await sweetmagic.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };



// Handle Costume create on POST.
exports.sweetmagic_create_post = async function(req, res) {
 console.log(req.body)
 let document = new sweetmagic();
 // We are looking for a body, since POST does not have query parameters.
 // Even though bodies can be in many different formats, we will be picky
 // and require that it be a json object
 // {"costume_type":"goat", "cost":12, "size":"large"}
 document.sweetmagic_type = req.body.sweetmagic_type;
 document.price = req.body.price;
 document.Quantity = req.body.Quantity;
 try{
 let result = await document.save();
 res.send(result);
 }
 catch(err){
 res.status(500);
 res.send(`{"error": ${err}}`);
 }
};


// Handle Costume delete form on DELETE.

exports.sweetmagic_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await sweetmagic.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };


// Handle Costume update form on PUT.


exports.sweetmagic_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await sweetmagic.findById( req.params.id)
 // Do updates of properties
 if(req.body.sweetmagic_type)
 toUpdate.sweetmagic_type = req.body.sweetmagic_type;
 if(req.body.cost) toUpdate.price = req.body.price;
 if(req.body.size) toUpdate.Quantity = req.body.Quantity;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};


// List of all Costumes
exports.sweetmagic_list = async function(req, res) {
    try{
    thesweetmagic = await sweetmagic.find();
    res.send(thesweetmagic);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // VIEWS
// Handle a show all view
exports.sweetmagic_view_all_Page = async function(req, res) {
    try{
    thesweetmagic = await sweetmagic.find();
    res.render('sweetmagic', { title: 'sweetmagic Search Results', results: thesweetmagic });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

// Handle a show one view with id specified by query
exports.sweetmagic_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await sweetmagic.findById( req.query.id)
        res.render('sweetmagicdetail', { title: 'sweetmagic Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};





exports.sweetmagic_create_Page = function(req, res) {
    console.log("create view")
    try{
        res.render('sweetmagiccreate', { title: 'sweetmagic Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{"error": Error creating ${err}}`); 
    }
};




exports.sweetmagic_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await sweetmagic.findById(req.query.id)
    res.render('sweetmagicupdate', { title: 'sweetmagic Update', toShow: result });
    }
    catch(err){
    res.status(500)
    //res.send(`{'error': '${err}'}`);
    }
   };



// Handle a delete one view with id from query
exports.sweetmagic_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await sweetmagic.findById(req.query.id)
        res.render('sweetmagicdelete', { title: 'sweetmagic Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};