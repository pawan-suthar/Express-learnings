import express from "express"
const app = express()
const port = process.env.PORT || 4000
import web from "./routes/web.js"

// use this for application level
import mid from "./middleware/mid.js"  

// setup template engine
app.set('view engine','ejs')
//set path where templates are located by default it views
app.set('views','Learnmiddleware/views')

//application level middleware(hit on all paths under this use)
app.use(mid)

app.use('/',web)



app.listen(port,(req,res)=>{
    console.log(`server started for middleware on http://localhost:${port}`);
})