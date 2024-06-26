const Joi = require('joi');


const user = Joi.string()
const name = Joi.string().min(1)
const lastName = Joi.string().min(1)
const email = Joi.string().email()
const date = Joi.date().greater('now')
const cart = Joi.array().min(1)

const insertAssistance = Joi.object({
  user:user,
  name:name.required(),
  lastName: lastName.required(),
  email: email.required(),
  date: date.required(),
  cart: cart.required()
})


module.exports={
  insertAssistance
}
