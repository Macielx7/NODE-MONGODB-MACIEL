const mongoose = require('mongoose')


//iesb
async function main() {
    try {
        await mongoose.connect(`mongodb+srv://joaosouza3:${process.env.DB_PASSWORD}@clusteriesb.ktr0p8y.mongodb.net/?retryWrites=true&w=majority&appName=ClusterIESB`);
        console.log("Banco conectado")
    } catch (error) {
        console.log('Erro: ' + error)
    }
}

module.exports = main