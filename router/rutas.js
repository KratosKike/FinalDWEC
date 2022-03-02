const express = require('express')
const router = express.Router()

//rutas

router.get("/",(req, res) => {
    res.render("index", {titulo: "Principal"})
})

//exportar

module.exports = router;