const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/express_pertamaku", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Nama tidak boleh kosong"] },
  age: { type: Number, required: [true, "Umur tidak boleh kosong"] },
  status: {
    type: String,
    enum: ["active", "non active"],
    default: "non active",
  },
});

const Users = mongoose.model("Users", userSchema);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", async () => {
  //   const newUser = await Users.create({
  //     name: "tio sanjaya",
  //     age: 20,
  //     status: "active",
  //   });
  //
  //   Perintah Menampilkan
  const users = await Users.find();
  console.log(users);
  //
  //   Perintah Tambah(create)
  //   const newUser = await Users.create({
  //     name: "alfin sanjaya",
  //     age: 20,
  //     status: "active",
  //   });
  //
  //   Perintah Tambah(save)
  //   const newUser = new Users();
  //   newUser.name = "tio";
  //   newUser.age = 21;
  //   newUser.status = "active";
  //   const insert = await newUser.save();
  //   console.log(insert);
  //
  //   Perintah update
  //   const updateUser = await Users.updateOne(
  //     { _id: "61ec87e0dc6cc61a88b44152" },
  //     { name: "tia dunia" }
  //   );
  //   console.log(updateUser);
  //
  //
  //   const deleteUser = await Users.deleteOne({ _id: "61ec87e0dc6cc61a88b44152" });
  //   console.log(deleteUser);
});
