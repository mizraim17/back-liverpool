const express = require ('express');
const mongoose = require('mongoose');
const Product =  require('../models/product-model');
const router = express.Router();

router.post("/product",(req,res,next) => {
  console.log("request ",req.body)
  const   {
    name, price,image
  }= req.body;

  const product= new Product ({
    name, price,image
  });


  product.save()
    .then(response => {
      console.log('response.data')
      res.json(response)
    })
    .catch((err)=>{
      console.log("error",err)
    })
});

  router.get("/product",(req,res,next)=>{
    console.log('**********-*************')
    Product.find()
      .then((result)=>{
        res.json(result)
      })
      .catch(err => next(err));
  })

  router.delete("/product/:id",(req,res,next)=>{
    console.log("entro")
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: "El id no existe" });
      return;
    }
    Product.findByIdAndDelete(req.params.id)
      .then(() => {
        res.json({
          message: `Proyecto con id ${req.params.id} se ha borrado correctamente`
        });
      })
      .catch(err => {
        res.json(err);
      });
  })

router.put("/product/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "El id no existe" });
    return;
  }
  Product.findByIdAndUpdate(req.params.id, req.body)
    .then((res) => {
      res.status(200).json({
        message: `Proyecto con id ${
          req.params.id
          } se ha actualizado correctamente`
      });
    })
    .catch(err => {
      res.json(err);
    });
});


module.exports=router