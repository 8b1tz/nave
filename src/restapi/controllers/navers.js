const Navers = require('../models/navers')

module.exports = app => { 
    app.get('/navers', (req, res) => {
        Navers.index(res)
    })
    app.get('/navers/:id', (req, res) => { 
        const id = parseInt(req.params.id)
        Navers.show(id, res)
      
    })
    app.post('/navers', (req, res) => { 
        const navers = req.body
        Navers.store(navers, res)

    })
    app.delete('/navers/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Navers.deleta(id, res)
    })

}