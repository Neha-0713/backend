const express = require('express');

const router=express.Router();
const Model = require('../models/UserModel')


router.get('/add', (req, res)=>{
    res.send('response from user add');
})

router.get('/getall', (req, res)=>{
    res.send('response from user getall');
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