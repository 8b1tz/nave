const Navers = require('../models/navers')
const navers = require('../controllers/navers')
module.exports = app => { 
    app.get('/navers', (req, res) => {
        Navers.lista(res)
    })

    app.post('/navers', (req, res) => { 
        const navers = req.body
        Navers.adiciona(navers, res)

    })
}