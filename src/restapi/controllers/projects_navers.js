const Project_navers = require('../models/projects_navers.js')

module.exports = app => { 
    app.post('/projects_navers', (req, res) => { 
        const projects_navers = req.body
        Project_navers.store(projects_navers, res)

    })
    app.get('/projects_navers', (req, res) => {
        Project_navers.index(res)
    })
}