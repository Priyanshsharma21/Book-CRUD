import mongoose from 'mongoose'

const { Schema, model } = mongoose

const publisherSchema = new Schema({
    name:{
        type : String,
        required: true,
        unique: true,
    },
    headquarter:{
        type : String,
        required: true,
    },
})

const Publisher = model('Publisher', publisherSchema)

export default Publisher