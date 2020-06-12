const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateRubbish = require('./generate_rubbish')
const app = express()
const port = 3000

// const hb = exphbs.create({
//   helpers: {
//     keep: function (v1, v2) { return (v1 === v2) }
//   }
// })

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const job = req.body.job
  const rubbish = generateRubbish(job)
  res.render('index', { rubbish: rubbish, job: job })
})

app.listen(port, () => {
  console.log(`This is running on http://localhost:${port}`)
})