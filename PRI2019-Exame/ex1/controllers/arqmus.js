var Arqmus = require('../models/arqmus')

module.exports.listar = () => {
    return Arqmus
            .find({},{ id: 1, tipo: 1, compositor: 1, titulo:1})
            .exec()
}

module.exports.consultarID = id => {
    return Arqmus
            .find({ id: id})
            .exec()
}

module.exports.consultarCompositor = () => {
    return Arqmus
            .aggregate([{$unwind:"$compositor"},{$group:{_id:"$compositor", titulos: {$push: {t: "$titulo"}}}}])
            .sort({_id: 1})
            .exec()
}

module.exports.consultarInstrumento=() => {
    return Arqmus
            .find({},{instrumentos:1})
            .exec()
}

module.exports.contar = () => {
    return Arqmus
           .aggregate([{$unwind:"$compositor"},{$group:{_id:"$compositor", totalSize: { $sum: { $size: "$instrumentos"}} }}])
            .sort({_id: 1})
            .exec()
}