import express from 'express'
import { getAllBooks, createBook, updateBook, deleteBook, getBooksByChetanBhagat,updateBookPrice,getBookWithPrice,updateBookWithPublisher,ratingPriceUpdate, getCompleteBooks } from '../controllers/books.js'

const router = express.Router()


router.get('/books', getAllBooks)

router.get('/author/chetan', getBooksByChetanBhagat)
router.get('/bookwithprice', getBookWithPrice)


router.get('/get-complete-books', getCompleteBooks)


router.put('/author', updateBookPrice)

router.put('/books', updateBookWithPublisher)

router.put('/books/update-price', ratingPriceUpdate)




router.post('/book', createBook)
router.put('/book/:bid', updateBook)
router.delete('/book/:bid', deleteBook)



export default router