import express from 'express'
import { getAllAuthors, createAuthor, updateAuthor, deleteAuthor } from '../controllers/authors.js'


const router = express.Router()


router.get('/authors', getAllAuthors)

router.post('/author', createAuthor)
router.put('/author/:aid', updateAuthor)
router.delete('/author/:aid', deleteAuthor)


export default router