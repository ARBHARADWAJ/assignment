const express = require("express");

const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const cors = require("cors");
const {
  User,
  loginUser,
  isRegistered,
  register,
  // isRegistered,
} = require("./db_conn/user");
const {
  productSchema,
  getallproducts,
  getproductdetail,
  addProduct,
} = require("./db_conn/products");

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("this is ecommer webste");
});

app.get("/login", async (req, res) => {
  const { username, password } = req.body;
  var isRegistered = await loginUser(username, password);
  if (isRegistered) {
    res.status(200).send({ messge: "logged in" });
  } else {
    res.status(401).send({ messge: "need to register" });
  }
});

app.post("/register", async (req, res) => {
  const { username, password, firstname, lastname, phno, address, pic } =
    req.body;

  var isRegister = await isRegistered(username, password);

  if (isRegister) {
    res.status(401).send({ status: "user already registered" });
  } else {
    const response = await register(
      username,
      password,
      firstname,
      lastname,
      phno,
      address,
      pic
    );
    res.status(201).send({ messge: "registered" });
  }
});

app.get("/getAllProducts", async (req, res) => {
  const allprod = await getallproducts();

  res.status(200).send({ products: allprod });
});

app.post("/productdetails", async (req, res) => {
  const { name } = req.body;

  const details = await getproductdetail(name);
  if (details) {
    return res.status(200).send({ product: details });
  } else {
    return res.status(204).send({ message: "tht prodcut is not found" });
  }
});

app.post("/addProduct", async (req, res) => {
  const { name,description, publisher, stock, price, image, rating } = req.body;
  await addProduct(name,description, publisher, stock, price, image, rating);
  res.status(200).send("created project");
});

app.listen(3500, () => {
  console.log("server started in post 3500");
});
