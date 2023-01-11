const validTypes = ['Plante', 'Poison', 'Feu', 'Eau', 'Insecte', 'Vol', 'Normal', 'Electrik', 'Fée' ];

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Pokemon', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: 'Le nom est déjà pris.'
        },
        validate: {
          notEmpty: {msg: 'Le nom doit être une chaine de caractère'},
          notNull: {msg: 'Ce champ ne peut être vide'}
        }
      },
      hp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: {msg: 'Utilisez uniquement des nombers entiers pour les point de vie. '},
          notNull: {msg: 'Les points de vie sont une propriété requise.'},
          min: {
            args: [0],
            msg: 'les point de vie doivent être supérieur ou égal à 0'
          },
          max: {
            args: [999],
            msg: 'les point de vie sont au maximum à 999'
          }
        }
      },
      cp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: {msg: 'Utilisez uniquement des nombres entiers'},
          notNull: {msg: 'Ceci est une propriété requise'},
          min: {
            args: [0],
            msg: 'les point de dégat doivent être supérieur ou égal à 0'
          },
          max: {
            args: [99],
            msg: 'les point de dégat sont au maximum à 99'
          }
        }
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: {msg: 'une URL est requise'},
          notNull: {msg: 'Ce champs ne peut être vide il faut une URL'}
        }
      },
      types: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
          return this.getDataValue('types').split(',')
        },
        set(types) {
          this.setDataValue('types', types.join())
        },
        validate: {
          isTypeValid(value) {
            if (!value) {
              throw new Error('Un Pokeon doit au moins avoir un type.')
            }
            if (value.split(',').length > 3) {
              throw new Error('Un pokémon ne peut avoir plus de trois types.')
            }
            value.split(',').forEach(type => {
              if (!validTypes.includes(type)) {
                throw new Error(`Le type d'un pokémon doit appartenir à la liste suivante : ${validTypes}`)
              }
            })
          }
        }
      }
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }