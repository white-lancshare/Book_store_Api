const db=require('../model/model')

const addBooks= async (req,res)=>{
 const{bookName,Author,Genre,ISBN}=req.body

const findbook =await db.find({bookName:bookName})
console.log('findbook',findbook)
if(findbook !==null && findbook.length>0){
return res.status(400).send('book already exist')
}
else{
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
}

const removeBook=async (req,res)=>{
    try{
    const bookId= req.params.id
  const deleteUser = await db.findByIdAndDelete(bookId)

  if(deleteUser===null){
  return  res.status(404).send('user not found')
  }
  
    res.status(200).send('user deleted sucessfuly')
  
 }catch(err){
    console.log('there is an err',err.message)
 }
}

const getone=async (req,res)=>{
 const id=req.params.id
 const find= await db.findById(id)
 if(!find){
    return res.status(404).send('not found')
 }

 res.status(200).json({
    user:find
 })
}

const updateBook =async(req,res)=>{
   const id= req.params.id

   const findId= await db.findById(id)
   if(findId===null){
      return res.status(404).send('user not found bro')
   }

   const {bookName,Author,Genre,ISBN} = req.body


     const user= await db.findByIdAndUpdate(
      id,
      {bookName,Author,Genre,ISBN},
      {new:true}
   )

   if(!user){
    return  res.status(404).send('user not found')
   }

   res.status(201).json(user)

}
const getall= async (req,res)=>{
   const books = await db.find()
   res.status(200).json({
      books:books
   })

}


module.exports={addBooks,removeBook,updateBook,getall,getone}