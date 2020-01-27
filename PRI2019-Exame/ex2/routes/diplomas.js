var express = require('express');
var router = express.Router();
var axios = require('axios')

const apiKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ"


router.get('/:id', async function(req, res, next) {
  var diploma = ""
  var tipologias = ""
  var erro = ""
  var flag = false
  await axios.get(`http://clav-api.dglab.gov.pt/api/legislacao/${req.params.id}?apikey=${apiKey}`)
          .then(dados => {
                diploma = dados.data
                flag = true
          })
          .catch(erro => {
                flag = false
                erro = erro
  })

  await axios.get(`http://clav-api.dglab.gov.pt/api/legislacao/${req.params.id}/processos?apikey=${apiKey}`)
          .then(dados => {
                flag = true
                processos = dados.data
          })
          .catch(erro => {
                flag = false
                erro = erro
  })



  if(flag) {
    res.render('diploma', { diploma: diploma, processos: processos });
  } else {
    res.render('error', {error: erro})
  }
});

module.exports = router;
