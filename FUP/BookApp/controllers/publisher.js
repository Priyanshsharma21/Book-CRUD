import Publisher from "../models/publisher.js"


export const getAllPublishers = async(req,res)=>{
    try {
        const publishers = await Publisher.find()

        res.status(200).json({success: true, publishers : publishers})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, error : error.message})
    }
}



export const createPublisher = async(req,res)=>{
    try {
        const publisher = await Publisher.create(req.body)

        res.status(200).json({success: true, publisher : publisher})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, error : error.message})
    }
}
