const Controller = require('../controllers/controller');
const route = require('express').Router();


// READ
route.get('/', Controller.readEmployees);

// CREATE
route.get('/employees/add', Controller.addNewEmployee);
route.post('/employees/add', Controller.new);

// UPDATE
route.get('/employees/edit/:id', Controller.editEmployee);
route.post('/employees/edit/:id', Controller.edit);

// DELETE
route.get('/employees/delete/:id', Controller.deleteEmployee);


module.exports = route;