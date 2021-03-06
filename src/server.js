// importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js');
const bodyParser = require('body-parser');

// iniciando o express
const server = express()
server
    // utilizando o bodyparser
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))

    // utilizar body do req
    .use(express.urlencoded({ extended: true }))

    // utilizando os arquivos estáticos
    .use(express.static('public'))

    // configurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // rotas da aplicação
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)
    .get('/login', pages.login)
    .get('/new-register', pages.register)
    .get('/forgot-password', pages.forgotPassword)
    .get('/reset-password', pages.resetPassword)

require('./app/controllers/index.js')(server);

// ligar o servidor
server.listen(5500)