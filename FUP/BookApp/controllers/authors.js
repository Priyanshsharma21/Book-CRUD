import Author from '../models/author.js'




export const getAllAuthors = async (req,res)=>{
    try {
        const authors = await Author.find()


        res.status(200).json({success : true, authors : authors})
        
    } catch (error) {
        res.status(500).json({success : false, error : error})
    }
}

export const createAuthor = async (req,res)=>{
    try {
        const author = await Author.create(req.body)

        res.status(200).json({success : true, author : author})
    } catch (error) {
            res.status(500).json({success : false, error : error})
    }
}


export const updateAuthor = async (req,res)=>{
    try {
        const {aid} = req.params
        const author = await Author.findByIdAndUpdate(aid,req.body,{
            new : true,
        })

        res.status(200).json({success : true, updatedAuthor : author})
    } catch (error) {
            res.status(500).json({success : false, error : error})
    }
}




export const deleteAuthor = async (req,res)=>{
    try {
        const {aid} = req.params
        const author = await Author.findByIdAndDelete(aid)

        res.status(200).json({success : true, deletedAuthor : author})
    } catch (error) {
            res.status(500).json({success : false, error : error})
    }
}