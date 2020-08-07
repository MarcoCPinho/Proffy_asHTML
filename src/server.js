//Servidor
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Inicio e configuração do servidor
server
    //receber os dados do req.body
    .use(express.urlencoded({ extended: true }))
    .use(express.static("public")) //configurar arquivos estáticos (css, scripts, imagens)
    .get("/", pageLanding) //rotas de aplicação
    .get("/study", pageStudy) //rotas de aplicação
    .get("/give-classes", pageGiveClasses) //rotas de aplicação
    .post("/save-classes", saveClasses)
    .listen(5500) //porta do servidor