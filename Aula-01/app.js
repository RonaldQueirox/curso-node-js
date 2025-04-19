const express = require('express')
const server = express()

server.get("/hello", (req, res) => {
    const { nome, idade } = req.query

    // No caso foi criado o /hello como se fosse um caminho
    return res.json({
        tittle: "Hello World!", 
        msg: `Olá ${nome} tudo bem!?`,
        idade: idade
    })
})
server.get("/hello/:nome/:idade", (req, res) => {
    const { nome, idade }  = req.params

    return res.json({
        title: "Hello World",
        msg: `Olá ${nome} tudo bem!?`,
        idade: idade
    })
})


server.listen(3003)