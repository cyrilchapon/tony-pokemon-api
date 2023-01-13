module.exports = {
  "development": {
    "url": process.env.DATABASE_URL,
    "migrationStorage": "sequelize",
    "seederStorage": "sequelize",
  },
  "production": {
    "url": process.env.DATABASE_URL,
    "migrationStorage": "sequelize",
  }
}
