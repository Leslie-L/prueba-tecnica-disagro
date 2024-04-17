const mongoose =  require('mongoose')
const express =  require("express")
require('dotenv').config()
const  cors = require('cors')

const PORT = process.env.PORT || 3005;
const routerApi = require('./routes');

const app = express()

//cors
app.use(cors())
// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.get('/',(req,res)=>{
  res.send('<h1>Hello world: Prueba tecnica</h1>')
})

routerApi(app);

app.listen(PORT,()=>{
  console.log('server on')
})

  module.exports = app
