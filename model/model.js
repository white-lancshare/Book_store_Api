const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/bookapiDB').then(()=>{
    console.log('server connected sucessfully')
}).catch((err)=>{
    console.log('server not connected')
})

const books= new mongoose.Schema({
bookName:String,
Author:String,
Genre:String,
ISBN:Number
})

const db=mongoose.model('booksdb',books)

module.exports=db