const express = require('express');

const router=express.Router();
const Model = require('../models/UserModel')


router.post('/add', (req, res)=>{
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);//500 is server side error response status code
    });

    
});

router.get('/getall', (req, res)=>{
    Model.find()
    .then((result) => {
        res.status(200).json(result); 
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.get('/getbyid', (req, res)=>{
    res.send('response from user id');
})

router.get('/update', (req, res)=>{
    res.send('response from update all');
})

router.get('/delete', (req, res)=>{
    res.send('response from delete');
})

module.exports=router;

//grtall
//getbyid
//update
//delete

//npm init -y
//npm i express
//npm install nodemon
//add dev script