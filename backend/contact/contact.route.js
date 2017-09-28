const express = require('express');
const router = express.Router();

const contactController = require('./contact.controller');





router.get('/', contactController.getContact);
router.post('/', contactController.postContact);



module.exports = router;