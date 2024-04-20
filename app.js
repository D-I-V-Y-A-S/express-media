const express=require("express")
const app=express()
const PORT=3500

const route=require('./routes/userRouter')
app.use('/api/v1',route)

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use('/images', express.static('images'));
app.use(express.json()) 

app.get('/',(request,response)=>{
    response.status(200).send("Hello!!")
})

app.listen(PORT,console.log(`server started running at http://localhost:${PORT}`))
