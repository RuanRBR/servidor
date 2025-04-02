const http = require('http')
const url = require('url')
const { soma } = require('./teste')

const PORT = 8000

// criar o servidor
const server = http.createServer((req,res) => {
    const urlCapturada = url.parse(req.url, true)
    const {query} = urlCapturada
    let resultado = 0
    let mensagem = 'O resultado é $(resultado)'
    if (pathmame == '/soma') {
        resultado = soma(Number(query.a), Number(query.b))
    } else if (pathmame == '/subtracao') {
    resultado = subtracao(Number(query.a), Number(query.b))
    } else if (pathmame == '/multiplicacao') {
    resultado = multiplicacao(Number(query.a), Number(query.b))
    } else if (pathmame == '/divisao') {
    resultado = divisao(Number(query.a), Number(query.b))
    } else {
        res.statusCode = 404
        mensagem = 'Página não encontrada'
    }res.end(mensagem)
})

// fazer ele ouvir na porta 8000
server.listen(PORT, () => {
    console.log(`o servidor foi inicializado na porta ${PORT}`)
})