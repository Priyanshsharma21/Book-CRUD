import express from 'express'
import { getAllPublishers, createPublisher } from '../controllers/publisher.js'


const router = express.Router()


router.get('/publishers', getAllPublishers)

router.post('/publisher', createPublisher)
// router.put('/publisher/:aid', updateAuthor)
// router.delete('/publisher/:aid', deleteAuthor)


export default router