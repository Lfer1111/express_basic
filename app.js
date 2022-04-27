// usando objeto express
const express = require("express")

// app de express
const app = express()

//puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// path inicial, respondera la url localhost:3000
app.get("/", (req, res) => {
    res.send("Hello World!")
})

// respondiendo texto. localhost:3000/launchx
app.get("/launchx", (req, res) => {
    res.send("Bienvenidos explorers a LaunchX")
})

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})