const { EndPoint } = require('../db/sequelize');

module.exports = (app) => {
    app.get('/api', (req, res) => {
			EndPoint.findAll()
			.then(endpoints => {
					const message = 'Bienvenue sur ma première API REST, voiçi toutes les actions que vous pouvez réalisé'
					res.json({message, data: endpoints})
			})
			.catch(error => {
					const message = "La liste des URL n'a pas pus être récupéré"
					res.status(500).json({message, data: error})
			})
    })
}