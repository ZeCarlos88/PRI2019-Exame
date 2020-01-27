var express = require('express');
var router = express.Router();
var axios = require('axios')

const apiKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ"

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get(`http://clav-api.dglab.gov.pt/api/legislacao?apikey=${apiKey}`)
          .then(dados => {
                res.render('index', { listadiplomas: dados.data});
          })
          .catch(erro => {
                res.render('error', {error: erro})
  })
  
});

module.exports = router;
