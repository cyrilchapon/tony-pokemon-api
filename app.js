const express = require('express')
const bodyparser = require('body-parser')
const favicon = require('serve-favicon')
const sequelize = require('./src/db/sequelize')

const app = express()
const port = process.env.PORT || 3000

app
.use(favicon('./favicon.ico'))
.use(bodyparser.json())

sequelize.initDb()

app.get('/', (req, res) => {
  const message = 'Hello, bienvenu sur mon Api ! Allez à l\'adresse "/api" afin de connaitre vos possibilité d\'accès'
  res.json({message})
})

require('./src/routes/homeApi')(app)
require('./src/routes/findAllPokemons')(app)
require('./src/routes/findPokemonByPk')(app)
require('./src/routes/createPokemon')(app)
require('./src/routes/updatePokemon')(app)
require('./src/routes/deletePokemon')(app)
require('./src/routes/login')(app)

app.use(({res}) => {
  const message = "Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL."
  res.status(404).json({message})
})

app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))
