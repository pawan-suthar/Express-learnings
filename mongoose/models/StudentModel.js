import mongoose from "mongoose";

// define schema
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18, max: 30 },
  city: { type: String, required: true },
});

//compile 
const studentmodel = mongoose.model('Student',studentSchema)


const createstu = async () => {
  try {
    const studoc = new studentmodel({
      name:"pawan",
      age:22,
      city:"bikaner"
    })
    //saving doc
    const result = await studoc.save()
    console.log(result);
    
  } catch (error) {
    console.log(error);
  }
}


export default createstu


