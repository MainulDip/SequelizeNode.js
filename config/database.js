const Sequelize = require('sequelize')

// Option 1: Passing parameters separately
const db = module.exports = new Sequelize('sequelize', 'postgres', '1111', {
  host: 'localhost',
  dialect: 'postgres'
})