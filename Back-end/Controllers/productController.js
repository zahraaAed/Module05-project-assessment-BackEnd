import Product from "../Models/Product.js";

export const getAllProducts = async (req, res) => {
 try {
    const products = await Product.find();
    res.json({ products, message: "Successfully retrieved all products" });
 } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
 }
};

export const getProductById = async (req, res) => {
 try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
 } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
 }
};

export const createProduct = async (req, res) => {
   // Ensure the user is authenticated and has the 'admin' role
   if (!req.user || req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Permission denied' });
   }
  
   // Extract the file and product data from the request
   const image = req.file ? req.file.path : null;
   const { product } = req.body;
  
   // Validate the product data
   if (!product || !product.title || !product.description || !product.price) {
      return res.status(400).json({ error: 'Missing required product fields' });
   }
  
   try {
      // Create a new Product document
      const newProduct = new Product({
        ...product,
        imagePath: image,
      });
  
      // Save the new product to the database
      const savedProduct = await newProduct.save();
  
      res.status(201).json(savedProduct);
   } catch (error) {
      console.error("Error creating product:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
   }
  };
  

export const updateProduct = async (req, res) => {
    try {
       const image = req.file?.path;
       let updateFields = req.body; 
   
    
       if (image) {
           updateFields.imagePath = image; 
       }
   
       const updatedProduct = await Product.findByIdAndUpdate(
         req.params.id,
         updateFields,
         { new: true, runValidators: true }
       );
   
       if (!updatedProduct) {
         return res.status(404).json({ message: 'Product not found' });
       }
   
       res.status(200).json(updatedProduct);
    } catch (error) {
       res.status(400).json({ error: error.message });
    }
   };
   

export const deleteProduct = async (req, res) => {
 try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
 } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
 }
};
