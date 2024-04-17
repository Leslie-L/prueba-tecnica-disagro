const mongoose =  require('mongoose')
const AssistanceModel =  mongoose.Schema({
    user:{
      type:String
    },
    name:{
      type:String,
      required: true,
    },
    lastName:{
      type:String,
      required: true
    },
    email:{
      type:String,
      required: true
    },
    date:{
      type:String,
      required: true
    },
    cart:{
      type:[String],
      required: true
    }
})
const Assistance =  mongoose.model("assistance",AssistanceModel )
module.exports = {
  Assistance
}
