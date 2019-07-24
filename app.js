const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const db = require('./config/database')

db.authenticate()
  .then(() => console.log('Database Connected.......'))
  .catch(err => console.log('Error:' + err))

const app = express()
// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json({ extended: false }))
app.get('/', (req, res) => {
  return res.render('index', { layout: 'landing' })
})

// Gigs Route
app.use('/gigs', require('./routes/gigs'))
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server Started On Port ${PORT}`))
