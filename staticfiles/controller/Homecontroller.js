import {join} from 'path'


const home = (req,res)=>{
    res.sendFile(join(process.cwd(),'staticfiles','views','home.html'))
}


export {home}