const express = require('express')
const {soma, subtracao} = require('./teste')

const server = express
const PORT = 8000

//criar o server
server.get('/soma', (req, res) => {
    //let resultado = soma(req.query.a, req.query.b)
    res.send('aqui vai o resultado da minha soma')
})

server.get('/subtracao', (req, res) => {
    //let resultado = subtracao(req.query.a, req.query.b)
    res.send('aqui vai o resultado da minha subtracao')    
})

//ouvir na porta 8000
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})