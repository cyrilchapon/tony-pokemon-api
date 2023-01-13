
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Endpoint', {
      id: {
        field: 'id',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      type: {
        field: 'type',
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        field: 'name',
        type: DataTypes.STRING,
        allowNull: false,
      },
      adress: {
        field: 'adress',
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        field: 'description',
        type: DataTypes.STRING,
        allowNull: false
      },
      condition: {
        field: 'condition',
        type:DataTypes.STRING,
        allowNull: false
      }
    }, {
      tableName: 'endpoints',
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }