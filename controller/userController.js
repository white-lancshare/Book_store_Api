const db=require('../model/model')

const addBooks= async (req,res)=>{
 const{bookName,Author,Genre,ISBN}=req.body
 const createUser= await db.create({
 bookName:bookName,
Author:Author,
Genre:Genre,
ISBN:ISBN
 })

res.status(201).json({
    user:'created sucessfully',
    msg:createUser
})

}

module.exports={addBooks}