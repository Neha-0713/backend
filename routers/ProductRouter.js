const express = require('express');

const router=express.Router();
const Model = require('../models/ProductModel')


router.post('/add', (req, res)=>{
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });
})

router.get('/getall',(req, res)=>{
    Model.find()
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
       console.log(err);
       res.status(500).json(err) 
    });

    router.get('/getbyid/:id',(req,res)=>{
        Model.find(req.params.id)
        
    })

})

module.exports=router;