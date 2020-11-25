const express = require('express');
const router = express.Router();
const UserController = require('../controller/Usercontroller.js');

router.get('/load', UserController.get_employee);

router.get('/user', UserController.get);


router.post('/user', UserController.store);


router.put('/user/:id', UserController.update);


router.get('/user/:id', UserController.getById);


router.delete('/user/:id', UserController.destroy);
module.exports = router;
