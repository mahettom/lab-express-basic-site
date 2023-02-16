// Accessing the express function
const express = require('express')

//create my app
const app = express()


// o_O ? 
app.set('view engine', 'hbs')



app.use(express.static(__dirname + '/public'))
//console.log(__dirname) aaaah i think i got it ! So we are saying to the pc that the static file are the file in public ?



app.get('/', (req, res) => {
    res.render('home', {
        title: 'Coluche',
        css: ['home', 'main'],
        image: ['home']
    })
})

app.get('/theManBehind', (req, res) => {
    res.render('theManBehind', {
        title: 'The Real OG',
        css: ['the-man-behind', 'main'],
        image: ['the-man-behind']
    })
})

app.get('/achievement', (req, res) => {
    res.render('achievement', {
        title: 'achievement',
        css: ['achievement', 'main'],
        image: ['achievement']
    })
})

app.listen(3000, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log(`App is live and 🏃 on http://localhost:3000`)
}
)