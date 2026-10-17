const express=require('express')
const router=express.Router()
const {addBooks}=require('../controller/userController')

router.post('/addBook',addBooks)

module.exports=router