//simple middleware

var mid = (req,res,next)=>{
    console.log("middleware hit");
    next();
}
export default mid