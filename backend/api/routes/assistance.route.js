const express = require('express')


const router = express.Router()

router.get('/',async(req,res)=>{
  res.status(200).send('<h1>Es un get</h1>')
})
router.post('/',async(req,res)=>{
  res.status(200).send('<h1>Es un get</h1>')
})

module.exports = router
