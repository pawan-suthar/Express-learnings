
import express from 'express' 
const router  = express.Router()

// student routes

router.get('/',(req,res)=>{
    res.send("test home page")
})
router.get('/product/:name/:id',(req,res)=>{
    const {name,id} = req.params
    res.send(`product is${name} and id:${id}`)
})


router.get('/destination/:from-:to',(req,res)=>{
    const {from,to} = req.params
    res.send(`you start from ${from} and reach ${to}`)
})

router.get('/:year/:month/and/:day',(req,res)=>{
    const {month,day,year} = req.params
    res.send(`year ${year} month ${month} and day${day}`)
})
//  module.exports = router old
export default router //new 