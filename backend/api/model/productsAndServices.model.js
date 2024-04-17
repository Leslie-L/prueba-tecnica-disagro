const mongoose =  require('mongoose')
const ProductsAndServicesModel =  mongoose.Schema({
    name:{
      type:String,
      required: true,
    },
    price:{
      type:Number,
      required: true
    },
    type:{
      type:String,
      required: true
    },

})
const PandS =  mongoose.model("productsandservicesModel",ProductsAndServicesModel )
module.exports = {
  PandS
}
