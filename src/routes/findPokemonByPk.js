const { Pokemon } = require('../db/sequelize')
  
module.exports = (app) => {
  app.get('/api/pokemons/:id', (req, res) => {
    Pokemon.findByPk(req.params.id)
      .then(pokemon => {

        if (pokemon == null) {
            const message = `le pokemon demande n'existe pas. essayer avec un autres identifiant`
            return res.status(404).json({message})
        }
        const message = `le pokémon ${pokemon.name} a bien été trouvé.`
        res.json({ message, data: pokemon })
      })
      .catch(error => {
        const message = `Le pokémons n'a pas pu être récupéré. Réssayer dans quelques instant.`
        res.status(500).json({message, data: error})
    })
  })
}