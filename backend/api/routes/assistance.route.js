const express = require('express')
const validatorHandler = require('./../middleware/validator.handler');
const {
  insertAssistance
} = require('./../schemas/assistance.schema')
const AssistanceService = require('./../service/assistance.services');


const router = express.Router()
const assistanceService = new AssistanceService();

router.get('/',
async (req,res)=>{
  try {
    const answer  =await assistanceService.getAll()
    res.status(200).json(answer)
  } catch (error) {
    res.status(500).json({msn:"Server error"})
  }
})

router.post('/',
validatorHandler(insertAssistance,'body')
,async(req,res)=>{
  try {
    const body = req.body
    const answer  =await assistanceService.create(body)
    res.status(201).json(answer)
  } catch (error) {
    res.status(500).json({msn:"Server error"})
  }
})

module.exports = router
