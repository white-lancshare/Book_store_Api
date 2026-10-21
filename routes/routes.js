const express=require('express')
const router=express.Router()
const {addBooks,removeBook,updateBook,getall,getone}=require('../controller/userController')

router.post('/addBook',addBooks)
router.delete('/deleteBook/:id',removeBook)
router.patch('/updateBook/:id',updateBook)
router.get('/allBooks',getall)
router.get('/getOneBook/:id',getone)

module.exports=router     