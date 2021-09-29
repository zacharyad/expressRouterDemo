const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send("you are in the birds route THTHEHEHE")
})

router.get("/:id", (req, res) => {
    let id = req.params.id
    /// use the id to find a single single birds in the DB
    // console.log("vdbnsjvbdhjsbvds", id)
    res.send("you are in the birds route and you want: " + id)
})

module.exports = router