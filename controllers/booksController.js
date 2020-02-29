const bookModel= require('../models/books')
const express= require('express')
const bookController= express()

  const createBook= (req, res)=>{
    new books({
      name=req.body.name,
      isbn= req.body.isbn,
      img= req.body.img,
      author=req.body.author
    }).save()
    .then(book=>{
      console.log(book)
    })
    .catch(err=>{
      console.log(err)
    })
  })

module.export=bookController
