import express from 'express'
import {join} from 'path'
const app = express()
const port = process.env.PORT || 5000
import homeroute from './routes/home.routes.js'

// app.use(express.static(join(process.cwd(),'staticfiles','public')));
app.use(`/public`,express.static(join(process.cwd(),'staticfiles','public'))); //virtual path

//load routs
app.use('/',homeroute)


app.listen(port,(req,res)=>{
    console.log(`server started for staticfiles on http://localhost:${port}`);
})