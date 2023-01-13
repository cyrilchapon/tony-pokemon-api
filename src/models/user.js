module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
      id: {
        field: 'id',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        field: 'username',
        type: DataTypes.STRING,
        unique: {
            msg: 'Le nom est déjà pris'
        }
      },
      password: {
        field: 'password',
        type: DataTypes.STRING
      }
    }, {
      tableName: 'users',
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }