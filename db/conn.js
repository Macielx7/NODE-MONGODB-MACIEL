const mongoose = require('mongoose')

async function main() {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.5zr3qmk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log("Banco conectado")
    } catch (error) {
        console.log('Erro: ' + error)
    }
}

module.exports = main