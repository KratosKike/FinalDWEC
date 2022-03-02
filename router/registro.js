const express = require('express')
const router = express.Router();
const User = require('../models/user');

router.get('/reg', async (req, res) =>{

    res.render('registro',
        {titulo: "Registro"})
})

router.post('/', async (req, res) =>{
    const body = req.body
    console.log(body)
    try{
        const UserDB = new User(body)
        await UserDB.save()
        res.redirect('/')
    }catch (error){
        console.log('error',error)

    }
})

router.get('/log', async (req, res) =>{

    res.render('login',
        {titulo: "Loguearse"})
})


module.exports = router;