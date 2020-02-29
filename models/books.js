const  mongoose = require('mongoose')
const Schema= mongoose.Schema

const booksSchema= new Schema({
  name: String,
  author: String,
  isbn: Number,
  img:String
})

const  bookModel = mongoose.model('bookModel', booksSchema)
module.export=bookModel
