const { Schema } = require("mongoose");
const mongoose = require("./mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phno: { type: String, required: true },
  address: String,
  profilepic: String,
});
const User = mongoose.model("User", userSchema);

async function isRegistered(username) {
  const find = await User.findOne({ username: username });
  if (find) {
    return true;
  } else {
    return false;
  }
  // return username, "value tell that the user registeed or not";
}

async function loginUser(username, password) {
  const valid = await User.find({ username: username, password: password });
  console.log(valid);
  if (valid.username) {
    return true;
  } else {
    return false;
  }
}

async function register(
  username,
  password,
  firstname,
  lastname,
  phno,
  address,
  pic
) {
  var v = await isRegistered(username);
  if (v) {
    return "user already registered";
  }
  const user = new User({});
  user.username = username;
  user.password = password;
  user.firstname = firstname;
  user.lastname = lastname;
  user.phno = phno;
  user.address = address;
  user.profilepic = pic;
  await user.save();
  console.log("user registered", user);
  return "user registered", user;
}

module.exports = { User, loginUser, isRegistered, register };
