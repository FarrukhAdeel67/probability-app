const express = require('express');
const routerBpl = express.Router();
routerBpl.use(express.json());
const bplcontroller = require('../controllers/bpl');
routerBpl.post("/", bplcontroller.postBpl);
routerBpl.get('/',bplcontroller.getBpl);
module.exports = routerBpl;