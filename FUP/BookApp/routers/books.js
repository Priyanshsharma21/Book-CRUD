import express from 'express'
import { getAllBooks, createBook, updateBook, deleteBook, getBooksByChetanBhagat,updateBookPrice,getBookWithPrice } from '../controllers/books.js'

const router = express.Router()


router.get('/books', getAllBooks)
router.get('/author/chetan', getBooksByChetanBhagat)
router.get('/bookwithprice', getBookWithPrice)


router.put('/author', updateBookPrice)




router.post('/book', createBook)
router.put('/book/:bid', updateBook)
router.delete('/book/:bid', deleteBook)



export default router