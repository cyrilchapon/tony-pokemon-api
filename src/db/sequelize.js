const { Sequelize, DataTypes } = require('sequelize')
const PokemonModel = require('../models/pokemon')
const HomeModel = require('../models/endpoint')
const UserModel = require('../models/user.js')

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Etc/GMT-2',
  },
  logging: false
})

const Pokemon = PokemonModel(sequelize, DataTypes)
const EndPoint = HomeModel(sequelize, DataTypes)
const User = UserModel(sequelize, DataTypes)

module.exports = { 
  sequelize,
  Pokemon,
  EndPoint,
  User
}