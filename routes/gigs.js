const express = require('express')
const router = express.Router()
const db = require('../config/database')
const Gig = require('../models/Gig')

// Get Gig List
router.get('/', (req, res) => { 
  //   res.send('Gigs')
  Gig.findAll()
    .then(gigs => {
      // console.log(JSON.stringify(gigs, null, 4))
      // res.sendStatus(200)
      return res.render('gigs', {
        gigs
      })
    })
    .catch(console.log)
  // try {
  //   const gigs = await Gig.findAll()
  //   console.log(gigs)
  //   return res.sendStatus(200)
  // } catch (err) {
  //   console.log(err)
  // }
})

// Display Add Gig Form

router.get('/add', (req,res)=>res.render('add'))

// Add A Gig
router.post('/add', (req, res) => {
let { title, technologies, budget, description, contact_email } = req.body

  // Insert Into Table
  Gig.create({
    title,
    technologies,
    description,
    budget,
    contact_email
  })
    .then(gig => res.redirect('/gigs'))
    .catch(err => console.log(err)``)
})

module.exports = router