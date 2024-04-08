const mongoose = require('mongoose')

const schema =  mongoose.Schema({
    nome: {type: String, 
        required:true,
        
        minLength: 2,
        maxLength: 10,
        trin:true,
    },
    preco:{type:Number,
        dafault:0 ,
        min: [0,"Mais Facil"],
        match:/^(\$|€|R\$$)?\d{1,3}(,\d{3})*(\.\d{2})?$/,

        

    },
    tamanho:{type: String, 
    
      
    },
    tipo:{type: String, 
        enum:["Bebidas","Pizzas","Massas","Sobremesa"]
    },
    ingredientes: [String]
})

const Produto = mongoose.model('Produto', schema)

module.exports = Produto