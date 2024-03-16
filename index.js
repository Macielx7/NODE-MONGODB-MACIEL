const express = require('express');
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const routes = require('./routes/routes')
app.use('/', routes)

app.listen(port, function () { console.log(`Server Online Porta: ${port}`) })