import express from 'express' 
const router  = express.Router()

router.get('/',(req,res)=>{
    res.send("testing Query string  home page")
})
// query string examples

router.get('/product',(req,res)=>{ //?category=mobile = query
    console.log(req.query);
    //{ category: 'mobile' }

    res.send("response ok")
})
router.get('/mobile',(req,res)=>{ //?name=samsung&model=note10 = multiple query seprated by '&'
    console.log(req.query);
    //{ name: 'samsung', model: 'note10' }
    res.send("query get ")
})

//  module.exports = router old
export default router //new 