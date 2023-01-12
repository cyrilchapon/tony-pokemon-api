const { Pokemon } = require('../db/sequelize')

const { Op } = require('sequelize')

module.exports = (app) => {
	app.get('/api/pokemons', (req, res) => {
		if (req.query.name) {
			const name = req.query.name
			if (name.length <= 1) {
				const message = 'il vous faut un minimum de deux caractère pour votre recherche';
				return res.status(400).json({ message })
			}
			const limit = parseInt(req.query.limit) || 5
			return Pokemon.findAndCountAll({
				where: {
					 name: { // 'name' est la propriété du modèle pokémon
 						[Op.like]: `%${name}%` // 'name' est le critère de la recherche
					 } 
					},
					order: ['name'],
					limit // permet de limité le nombre de résultat souhaiter
				})
				.then(({count, rows}) => {
					const message = `il y a ${count} pokémons qui correspondent au terme de recherche ${name}.`
					res.json({ message, data: rows })
				})
		} else {
			Pokemon.findAll({order: ['name'], limit: 5})
				.then(pokemons => {
					const message = "La liste des pokémons a bien été récupérée."
					res.json({ message, data: pokemons })
				})
				.catch(error => {
					const message = `La Liste des pokémons n'a pas pu être récupéré. Réssayer dans quelques instant.`
					res.status(500).json({ message, data: error })
				})
		}
	})
}