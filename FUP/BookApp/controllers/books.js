import Book from '../models/book.js'
import Author from '../models/author.js'


export const getAllBooks = async (req,res)=>{
    try {
        const books = await Book.find()


        res.status(200).json({success : true, books : books})
        
    } catch (error) {
        res.status(500).json({success : false, error : error})
    }
}


export const getBooksByChetanBhagat = async(req,res)=>{
    try {
        const chetanBroId = await Author.findOne({author_name : 'Chetan Bhagat'}).select({author_id : 1, _id : 0})

        const {author_id} = chetanBroId

        const allBooksWithChetanBro = await Book.find({author_id : author_id})


        res.status(200).json({success: true, booksByChetanBro : allBooksWithChetanBro})
    } catch (error) {
        res.status(500).json({success : false, error : error})
    }
}




export const updateBookPrice = async (req,res)=>{
    try {
        const {bookname} = req.query

        const book = await Book.findOne({ name: bookname });

        if (!book) {
        return res
            .status(404)
            .json({ success: false, message: 'Book not found' });
        }

        const updatedBook = await Book.findOneAndUpdate(
            { name: book.name },
            { price: 100 },
            { new: true } // Return the updated document
          );

          console.log(updatedBook)

        const author = await Author.findOne({author_id : updatedBook.author_id});

        res.status(200).json({
        success: true,
        author_name: author.author_name,
        updated_price: updatedBook.price,
        });

    } catch (error) {
            res.status(500).json({success : false, error : error})
    }
}




export const getBookWithPrice = async (req,res)=>{
    try {
        const books = await Book.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})
        const authorIds = books.map((book) => book.author_id);
        const uniqueIdAuthorWala = [...new Set(authorIds)];


        const author = await Promise.all(
            uniqueIdAuthorWala.map(async(authorDadaKiId)=>{
                const author = await Author.findOne({ author_id: authorDadaKiId }).select({ author_name: 1 });
                return author.author_name;
            })
        )

        

        res.status(200).json({success : true, authorName : author})

    } catch (error) {
            res.status(500).json({success : false, error : error})
    }
}


export const createBook = async (req,res)=>{
    try {
        const book = await Book.create(req.body)

        res.status(200).json({success : true, book : book})

    } catch (error) {
            res.status(500).json({success : false, error : error})
    }
}


export const updateBook = async (req,res)=>{
    try {
        const {bid} = req.params
        const book = await Book.findByIdAndUpdate(bid,req.body,{
            new : true,
        })

        res.status(200).json({success : true, updatedBook : book})

    } catch (error) {
            res.status(500).json({success : false, error : error})
    }
}

export const deleteBook = async (req,res)=>{
    try {
        const {bid} = req.params
        const book = await Book.findByIdAndDelete(bid)

        res.status(200).json({success : true, deletedBook : book})
    } catch (error) {
            res.status(500).json({success : false, error : error})
    }
}