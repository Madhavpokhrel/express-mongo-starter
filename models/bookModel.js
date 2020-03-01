const mongoose = require('mongoose')
const Schema= mongoose.Schema
const bookSchema= new Schema({
    name: String,
    author: String,
    isbn: Number,
    img:String
})
const bookModel= mongoose.model('bookModel', bookSchema)
module.exports=bookModel
