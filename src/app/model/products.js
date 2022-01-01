const mongoose = require('mongoose')

const { Schema } = mongoose

const Product = new Schema({
    name:{
        type: String,
        required: [true, 'product name must  be provide']
    },
    price:{
        type: Number,
        required: [true, 'product price must  be provide']
    },
    featrued:{
        type: Boolean,
        default: false
    },
    rating:{
        type: Number,
        default: 4.5
    },
    createAt:{
        type: Date,
        default: Date.now()
    },
    company:{
        type: String,
        enum:{
            values:['caressa', 'liddy', 'ikea', 'marcos'],
            message:'{VALUE} is not supports'
        }
        // enum:['Dell', 'Apple', 'SamSung']
    }
})


module.exports =  mongoose.model('Product', Product)