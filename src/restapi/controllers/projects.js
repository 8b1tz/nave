const Projects = require('../models/projects')

module.exports = app => { 
    app.get('/projects', (req, res) => {
        Projects.index(res)
    })
    app.get('/projects/:id', (req, res) => { 
        const id = parseInt(req.params.id)
        Projects.show(id, res) 
    })
    app.post('/projects', (req, res) => { 
        const projects = req.body
        Projects.store(projects, res)

    })
}