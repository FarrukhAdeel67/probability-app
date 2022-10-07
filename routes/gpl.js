const express = require('express');
const router = express.Router();
router.use(express.json());
 // remove this line as it is already done in app.js
const gplcontroller = require('../controllers/gpl');
router.get("/",gplcontroller.getGpl);
router.post("/",gplcontroller.postGpl);
 module.exports = router;