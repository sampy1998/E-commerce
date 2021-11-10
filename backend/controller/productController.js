const Product = require("../models/productModels");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError")
const ApiFeatures = require("../utils/apiFeatures")

//Create  product for admin
exports.createProduct = catchAsyncError(
    async (req,res,next)=>{
        const product = await Product.create(req.body);
    
        res.status(201).json({
            success: true,
            product
        })
    
    }
);


//get all products
exports.getAllProducts = catchAsyncError(async(req, res,next)=>{

    const resultPerPage = 5;
    const productCount = await Product.countDocuments();
    const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .pagination(resultPerPage);

    const products = await apiFeature.query;

    res.status(200).json({
        success:true,
        products,
        productCount
    })
});


//update product
exports.updateProduct = catchAsyncError(async(req,res,next) => {

    let product = await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler("Product Not Found",404))
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true,
    });

    res.status(200).json({
        success:true,
        product
    })
});


//GET PRODUCT DETAILS
exports.getProductDetails = catchAsyncError(async(req,res,next) => {

    const product = await Product.findById(req.params.id);
   
    if(!product){
        return next(new ErrorHandler("Product Not Found",404))
    }

    res.status(200).json({
        success:true,
        product,
        message:"Product Detail Found"
    })

});



//DELETE THE PRODUCT
exports.deleteProduct = catchAsyncError(async(req,res,next) =>{

    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product Not Found",404))
    }

   await product.remove();

   res.status(200).json({
       success:true,
       message:"Product Delete Successfully"
   })
});