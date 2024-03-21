const mongoose = require('mongoose')

const schema =  mongoose.Schema({
    mesa: String,
    funcionario: Number,
    cliente: String,
    forma_pagamento: String
})

const Comanda = mongoose.model('Comanda', schema)

module.exports = Comanda