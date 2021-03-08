const Navers = require('../models/navers')
const navers = require('../controllers/navers')
module.exports = app => { 
    app.get('/navers', (req, res) => {
        Navers.index(res)
    })
//com prametro
    app.get('/navers/:id', (req, res) => { 
        const id = parseInt(req.params.id)
        Navers.show(id, res)
      
    })
    app.post('/navers', (req, res) => { 
        const navers = req.body
        Navers.store(navers, res)

    })

}