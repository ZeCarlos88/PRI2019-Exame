var express = require('express');
var router = express.Router();
var Arqmus = require('../controllers/arqmus')


router.get('/', function(req, res, next) {;
 
  if(req.query.by == "compositor") {
    Arqmus.consultarCompositor(req.query.type,req.query.year)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  } else if(req.query.by == "instrumento") {
    Arqmus.consultarInstrumento(req.query.type)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
  } 
  else {
    Arqmus.listar()
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
  });
});

router.get('/:id', function(req, res, next) {;
    Arqmus.consultarID(req.params.id)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
});


module.exports = router;
