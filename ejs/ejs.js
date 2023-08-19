import express from 'express'
const app = express()
const port = process.env.PORT || 3000
import web from './routes/main.routes.js'

// setup template engine
app.set('view engine','ejs')
//set path where templates are located by default it views
app.set('views','ejs/views')

//load routes
app.use('/',web)


app.listen(port,(req,res)=>{
    console.log(`server started for ejs on http://localhost:${port}`);
})