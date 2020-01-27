var express = require('express');
var router = express.Router();
var Arqmus = require('../controllers/arqmus')


router.get('/', function(req, res, next) {;
    Arqmus.listarCompositores()
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
  });




module.exports = router;