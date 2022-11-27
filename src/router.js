const express = require('express');

const router = express.Router();

const secaoController = require('./controllers/secaoController');
const secaoUtilitarios = require('./utilitarios/secaoUtilitarios');


router.get('/secao', secaoController.getAll);
router.post('/secao', secaoUtilitarios.validateTitle, secaoController.createSecao);
router.delete('/secao/:id', secaoController.deleteSecao);
router.put('/secao/:id', secaoUtilitarios.validateTitle, secaoUtilitarios.validateFielStatus, secaoController.updateSecao);

module.exports = router;