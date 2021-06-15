// Include express from node_modules and define server related variables
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

// setting static files
app.use(express.static('public'))
app.use('/assets', express.static('assets'))

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


// routes setting
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/product', (req, res) => {
  res.render('product', { productCSS: true })
})

app.get('/products', (req, res) => {
  res.send('My favorite food is ice cream')
})

// Listen the server when it started
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})