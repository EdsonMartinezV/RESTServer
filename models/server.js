const express = require('express')
const cors = require('cors')

class Server {
  constructor(){
    this.app = express()
    this.port = process.env.PORT
    this.usersRoutes = '/api/users'

    //Middlewares
    this.middlewares()
    this.routes()
  }

  middlewares(){
    this.app.use(cors())
    this.app.use(express.json()) // To receive json data (Not necesary for just sending)
    this.app.use(express.static('public'))
  }

  routes(){
    this.app.use(this.usersRoutes, require('../routes/users'))
  }

  listen(){
    this.app.listen(this.port, () => console.log(`App listening in port: ${this.port}`))
  }
}

module.exports = Server
