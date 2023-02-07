// Accessing the express function
const express = require('express')

// what mean get the app object (like saying in the course) ??
const app = express()


// o_O ? 
app.set('view engine', 'hbs')


app.use(express.static(__dirname + '/public'))
//console.log(__dirname) aaaah i think i got it ! So we are saying to the pc that the static file are the file in public ?



app.get('/', (req, res) => {
    res.render('home', {
        title: 'Coluche',
        css: ['home']
    })
})

app.get('/behindTheMask', (req, res) => {
    res.render('behindTheMask', {
        title: 'The Real OG',
        css: ['behindTheMask']
    })
})

app.get('/achievement', (req, res) => {
    res.render('achievement', {
        title: 'achievement',
        css: ['achievement']
    })
})

app.listen(3000, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log(`App is live and 🏃 on http://localhost:3000`)
}
)