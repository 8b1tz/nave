const NaversProjects = require('../models/naverProjects.js')
const naverProjects = require('../controllers/naversproject')
module.exports = app => { 
    app.get('/naverProjects', (req, res) => {
        NaversProjects.lista(res)
    })

    app.post('/naverProjects', (req, res) => { 
        const naverProjects = req.body
        NaversProjects.adiciona(naverProjects, res)

    })
}