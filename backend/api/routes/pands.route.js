const express = require('express')
const validatorHandler = require('./../middleware/validator.handler');

const PandSService = require('./../service/pands.services');


const router = express.Router()
const pandSService = new PandSService();

router.get('/',
async (req,res)=>{
  try {
    const answer  =await pandSService.getAll()
    res.status(200).json(answer)
  } catch (error) {
    res.status(500).json({msn:"Server error"})
  }
})


module.exports = router
