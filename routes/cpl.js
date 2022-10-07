const express = require('express');
const routerCpl = express.Router();
routerCpl.use(express.json());

const cplcontroller = require('../controllers/cpl');
routerCpl.get('/',cplcontroller.getCpl);
routerCpl.post("/", cplcontroller.postCpl);
module.exports = routerCpl;