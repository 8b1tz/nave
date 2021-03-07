const Projects = require('../models/projects')
module.exports = app => { 
    app.get('/projects', (req, res) => {
        Projects.lista(res)
    })

    app.post('/projects', (req, res) => { 
        const projects = req.body
        Projects.adiciona(projects, res)

    })
}