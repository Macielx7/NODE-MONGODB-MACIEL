const mongoose = require('mongoose')

const schema =  mongoose.Schema({
    nome: {type: String, 
        required:true,
        uppercase:true,
        minLength: 2,
        maxLength: 10,
    },
    cargo:{type: String,
        required:true,
        uppercase:true,
    
    },
    Cpf:{type:Number,
        required:true,
        match:[/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF INVALIDO"],
    },
    Salario:{type:Number,
        required:true,

    },
})

const Funcionario = mongoose.model('Funcionario', schema)

module.exports = Funcionario