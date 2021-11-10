const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required:[true,"please enter product name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Please enter product description"]
    },
    price:{
        type:Number,
        required:[true,"Please Enter product price"],
        maxLength:[8,"Price cannot exceed 8 characters"]
    },
    rating:{
     type:Number,
     default:0
    },
    images:[
    {
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }
],
category:{
    type:String,
    required:[true, "please enter product category"]
},
Stock:{
    type:Number,
    required:[true,"plaese enter product stock"],
    maxLength:[4,"Stock cannot exceed 4 characters"],
    default:1
},
numberOfReviews:{
    type:Number,
    default:0
},
reviews:[
    {
        name:{
            type:String,
            required:true
        },
        rating:{
            type:Number,
            required:true
        },
        comment:{
            type:String,
            required:true
        }
    }
],
createdAt:{
    type:Date,
    default:Date.now
}
})

module.exports = mongoose.model("Product",productSchema);