import foodModel from "../models/foodModel.js";
import fs from 'fs';

const addFood = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    const image_filename = req.file.filename;

    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: image_filename
    });

    await food.save();

    return res.status(200).json({
      success: true,
      message: 'Food added successfully',
      food
    });

  } catch (error) {
    console.error('Upload or DB error:', error);
    return res.status(500).json({ success: false, message: 'Something went wrong' });
  }
};

//all food list
const listFood = async (req,res) =>{
  try {
    const foods = await foodModel.find({});
    res.json({success:true,data:foods})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
  }
}

//remove food items
const removeFood = async(req,res)=>{
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`,()=>{})

    await foodModel.findByIdAndDelete(req.body.id)
    res.json({success:true,message:"Food Item Removed"})
  } catch (error) {
    console.log(error)
    res.json({success:false,message:"Error"})
  }
}

export { addFood, listFood, removeFood};
