const Sequelize = require('sequelize')
const db = require('../config/database')

const Gig = db.define('gig', {
  title: {
    type: Sequelize.STRING
  },
  technologies: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  budget: {
    type: Sequelize.STRING
  },
  contact_email: {
    type: Sequelize.STRING
  }
})



// class User extends Sequelize.Model {}
// User.init({
//   // attributes
//   firstName: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: Sequelize.STRING
//     // allowNull defaults to true
//   }
// }, {
//   db,
//   modelName: 'user'
//   // options
// });

module.exports = Gig;