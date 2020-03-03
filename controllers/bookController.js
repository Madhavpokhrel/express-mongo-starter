const express = require('express')
const bookModel = require('../models/bookModel')
const bookRouter = express.Router()

// localhost:3000/book/new
bookRouter.get('/new', (req, res) => {
  res.render('new.ejs')
})

//DELETE
bookRouter.get('/delete/:id', (req, res)=>{
      bookModel.findByIdAndDelete(req.params.id)
      .then(deleted=>{
          res.redirect('/book')
      })
  })


// SHOW PAGE
bookRouter.get('/show/:id', (req, res) => {
  console.log(req.params)
  bookModel.findById(req.params.id, (error, book) => {
    res.render('show.ejs', {
      book: book
    })
  })
})

// Create
bookRouter.post('/create', (req, res) => {
  new bookModel({
      ...req.body
    }).save()
    .then(createdBook => {
      res.redirect('/book')
    })
})

// INDEX
bookRouter.get('/', (req, res) => {
  bookModel.find({}, (error, allBook) => {
    res.render('index.ejs', {
      books: allBook
    })
  })
})

// Drop DB Route
bookRouter.get(
  '/dropdatabase/cannotundo/areyoursure/reallysure/okthen',
  (req, res) => {
    bookRouter.collection.drop()
    res.send('You did it! You dropped the database!')
  }
)
module.exports = bookRouter
