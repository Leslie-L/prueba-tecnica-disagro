const express = require('express')
const validatorHandler = require('./../middleware/validator.handler');
const {
  insertAssistance
} = require('./../schemas/assistance.schema')

const router = express.Router()

router.get('/',
(req,res)=>{
  res.status(200).send('<h1>Es un get</h1>')
})

router.post('/',
validatorHandler(insertAssistance,'body')
,async(req,res)=>{
  const body = req.body
  res.status(201).json(body)
})

module.exports = router
