const express = require('express')
const app = express()


// middleware applying function
// app.use()


app.get('/', (req, res) => {
    res.send("You made it to the root route")
})

app.get('/birds', (req, res) => {
    res.send("You made it to the birds route")
})

app.get('/cats', (req, res) => {
    res.send("You made it to the cats route")
})


// listening a port
const PORT = 8080

app.listen(PORT, () => {
    console.log("listening on port: ", PORT)
})