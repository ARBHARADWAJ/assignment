const { mongo } = require("mongoose");
const mongoose = require("./mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description:String,
  publisher: String,
  stock: Number,
  price: Number,
  image: String,
  rating: Number,
});

const Product = mongoose.model("Product", productSchema);

async function getallproducts() {
  try {
    const products = await Product.find({});

    if (products.length > 0) {
      return products;
    } else {
      return "products need to be register";
    }
  } catch (e) {
    console.log(e);
  }
}
async function getproductdetail(product) {
  const products = await Product.find({ name: product });
  if (products) {
    return products;
  } else {
    return "product not found";
  }
}
async function addProduct(name,description, publisher, stock, price, image, rating) {
  const newproduct = new Product({});
  newproduct.name = name;
  newproduct.description=description;
  newproduct.publisher = publisher;
  newproduct.stock = stock;
  newproduct.price = price;
  newproduct.image = image;
  newproduct.rating = rating;
  await newproduct.save();
  return newproduct;
}

module.exports = {
  productSchema,
  getallproducts,
  getproductdetail,
  addProduct,
};
