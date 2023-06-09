import express from 'express'
import bookRouter from './routers/books.js'
import authorRouter from './routers/authors.js'

const app = express()


// Normal Middlewares
app.use(express.json())
app.use(express.urlencoded({extended : true}))


// Routing Middlewares
app.use('/api/v1', bookRouter)
app.use('/api/v1', authorRouter)

export default app