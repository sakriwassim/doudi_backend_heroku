const express = require("express")
const accountRoute = require('./routers/account.route')
const app=express()



app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',accountRoute)



app.listen(3000,()=>console.log('server running on post 3000'))