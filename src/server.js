//data

const proffys = [
    {
        name: "Marco Pinho",
        avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQHUoaWQSgOH9Q/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=SwoqMUT2Hh0S8gfFITc8qIdmAE42guMBvby3A1X8cI0",
        whatsapp: "47 99111-8981",
        bio: "Aprendendo desenvolvimento front-end",
        subject: "Química",
        cost: "80",
        weekday: [1],
        time_from: [1980],
        time_to: [5220]
    },
    {
        name: "Marco C Pinho",
        avatar: "https://avatars0.githubusercontent.com/u/68476808?s=460&u=e46db5c112259f8f91aebb0a9732b6e492e9af59&v=4",
        whatsapp: "47 99111-8981",
        bio: "Aprendendo desenvolvimento back-end",
        subject: "Física",
        cost: "150",
        weekday: [3],
        time_from: [1980],
        time_to: [5220]
    },
    {
        name: "Marco Carvalho de Pinho",
        avatar: "https://avatars0.githubusercontent.com/u/68476808?s=460&u=e46db5c112259f8f91aebb0a9732b6e492e9af59&v=4",
        whatsapp: "47 99111-8981",
        bio: "Aprendendo desenvolvimento full-stack",
        subject: "Matemática",
        cost: "320",
        weekday: [5],
        time_from: [1980],
        time_to: [5220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciência",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//Funções

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query
    const isNotEmpty = Object.keys(data).lengh > 0
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)
        proffys.push(data)

        return res.redirect("/study")
    }
    return res.render("give-classes.html", { subjects, weekdays })
}

//Servidor
const express = require('express')
const server = express()

//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
    .use(express.static("public")) //configurar arquivos estáticos (css, scripts, imagens)
    .get("/", pageLanding) //rotas de aplicação
    .get("/study", pageStudy) //rotas de aplicação
    .get("/give-classes", pageGiveClasses) //rotas de aplicação
    .listen(5500) //porta do servidor