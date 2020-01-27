const mongoose = require('mongoose')

var arqmusSchema = new mongoose.Schema({
    id: String,
    titulo: String,
    tipo: String,
    compositor: String,
    infrelacionada:{video:{href:String}},
    arranjo:String,
    instrumentos: [{
        designação:String,
        partitura:{path:String},
        afinacao:String,
        clave:String
    }]
});

module.exports = mongoose.model('arqmus', arqmusSchema);