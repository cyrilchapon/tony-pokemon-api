const { Sequelize, DataTypes } = require('sequelize')
const PokemonModel = require('../models/pokemon')
const HomeModel = require('../models/endpoint')
const UserModel = require('../models/user.js')
const pokemons = require('./mock-pokemon')
const endpoints = require('./endpoint')
const bcrypt = require('bcrypt')
  
const sequelize = new Sequelize('pokedex', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-2',
  },
  logging: false
})
  
const Pokemon = PokemonModel(sequelize, DataTypes)
const EndPoint = HomeModel(sequelize, DataTypes)
const User = UserModel(sequelize, DataTypes)
  
const initDb = () => {
  return sequelize.sync({force: true}).then(_ => {
    pokemons.map(pokemon => {
      Pokemon.create({
        name: pokemon.name,
        hp: pokemon.hp,
        cp: pokemon.cp,
        picture: pokemon.picture,
        types: pokemon.types
      }).then(pokemon => console.log(pokemon.toJSON()))
    })

    console.log('La base de donnée pokémon a bien été initialisée !')

    endpoints.map(endpoint => {
      EndPoint.create({
        type: endpoint.type,
        name: endpoint.name,
        adress: endpoint.adress,
      }).then(endpoint => console.log(endpoint.toJSON()))
    })

    console.log('La base de donnée Api_Endpoint a bien été initialisée !')

    bcrypt.hash('pikachu', 10)
      .then(hash => User.create({ username:'pikachu', password: hash }))
      .then(user => console.log(user.toJSON()))
  })
}
  
module.exports = { 
  initDb, Pokemon, EndPoint, User
}