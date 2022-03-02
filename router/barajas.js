const express = require('express')
const router = express.Router();
const Baraja = require('../models/baraja');



router.get('/', async (req, res) =>{

    try{
        
        const arrayBarajasDB = await Baraja.find();
        console.log(arrayBarajasDB);


        res.render("barajas",{
            titulo: "Barajas",
            arrayBarajas:arrayBarajasDB})


    }catch (error) {
        console.error(error)
    }



})


router.get('/crear', (req, res) => {
    res.render('crear',
        {titulo: "Crear Baraja"}) //Nueva vista que debemos crear
})

router.get('/:id', async (req, res) => { 
    const id = req.params.id
    try{
        const BarajaDB = await Baraja.findOne({ _id: id })
        console.log(BarajaDB)
        res.render('detalle', { 
            titulo: "Editar Baraja",
            baraja: BarajaDB,
            error: false
        })
    }catch (error){

        console.log('Se ha producido un error', error)
        res.render('detalle', { 
            titulo: "Editar Baraja",
            error: true,
            mensaje: 'No encontrado!'
        })
    }

})

router.post('/', async (req, res) =>{
    const body = req.body
    console.log(body)
    try{
        const barajaDB = new Baraja(body)
        await barajaDB.save()
        res.redirect('/barajas')
    }catch (error){
        console.log('error',error)

    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    console.log('id desde backend', id)
    try{
        const BarajaDB = await Baraja.findByIdAndDelete({ _id: id });
        console.log(BarajaDB)
        if(!BarajaDB){
            res.json({
                estado: false,
                mensaje:"No se pudo eliminar."
            })
        }else{
            res.json({
                estado: true,
                mensaje: "Eliminado"
            })
        }
    }catch (error){
        console.log(error)

    }

})

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(id)
    console.log('body', body)
    try{
        const BarajaDB = await Baraja.findByIdAndUpdate(
            id,
            body,
            {useFindAndModify: false}
        )
        console.log(BarajaDB)
        res.json({
            estado: true,
            mensaje:'Editado'
        })
    }catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Problema al editar'
        })

    }

})




module.exports = router;