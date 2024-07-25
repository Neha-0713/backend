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

//colon denotes url parameter
router.get('/getbycity/:city' , (req, res)=>{
    console.log(req.params.city);

    Model.find({city:req.params.city})
    .then((result) => {
        res.status(200).json(result); 
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

})

router.get('/getbyemail/:email',(req, res)=>{
    Model.findOne({email:req.params.email})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})



router.get('/getbyid/:id', (req, res)=>{
    Model.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})





router.delete('/delete/:id', (req, res)=>{
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.put('/update/:id',(req,res)=>{
    Model.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
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