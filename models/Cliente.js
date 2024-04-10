const mongoose = require('mongoose')

const schema =  mongoose.Schema({
    nome: {
        type: String,
        required: true,
        maxLength: 10,
        uppercase:true,
        trin: true
    },
    Cpf:{type:Number,
        required:true,
        match:[/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF INVALIDO"],
    },
    telefone: {
        type: String,
        required: true,
        match: [/^\(\d{2}\) 9\d{1} \d{4}-\d{4}$/, "TELEFONE INVÁLIDO. O formato correto é (XX) 9XXXX-XXXX"]
    }
})

const Cliente = mongoose.model('Cliente', schema)

module.exports = Cliente