const {express} = require('express');
const {Router } = require('express');

const router = Router();

const conexion = require('../db/conexion');


router.post('/conectar',conexion.connect);

module.exports = router;
