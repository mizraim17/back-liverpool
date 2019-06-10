const express = require ('express');
const mongoose = require('mongoose');
const Product =  require('../models/product-model');
const router = express.Router();

router.post("/product",(req,res,next) => {
  console.log("----------------------",req.body)
  const   {
    name, price
  }= req.body;

  const product= new Product ({
    name, price
  });


  product.save()
    .then(response => {
      console.log('response.data',res.json(response.data))
      res.json(response)
    })
    .catch((err)=>{
      console.log("error",err)
    })

});



module.exports=router