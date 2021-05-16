//require related modules used in the project
const express = require('express')
const exphbs = require('express-handlebars')
//const bodyParser = require('body-parser')
const generatePassword = require('./generate_password')
const app = express()
const port = 3000

//setting body-parser
app.use(express.urlencoded({ extended: true }))

//set template engine in express
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//localhost:3000
app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    console.log('random password is: ', generatePassword(req.body))
    const options = req.body
    const password = generatePassword(req.body)
    res.render('index' , { password: password , options: options } )
})

app.listen(port, () => {
    console.log(`the express server is running on http://localhost:${port}`)
})