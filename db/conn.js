const mongoose = require('mongoose')

async function main() {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@clusteriesb.ktr0p8y.mongodb.net/?retryWrites=true&w=majority&appName=ClusterIESB`);
        console.log("Banco conectado")
    } catch (error) {
        console.log('Erro: ' + error)
    }
}

module.exports = main