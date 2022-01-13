const express = require("express");
const sequelize = require("./sequelize");
const models = require("./models/Index");
const router = require("./routes/Router");

const PORT = 5000;
const app = express();
app.use("/api", router);
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("Сервер работает");
});

app.listen(PORT, async () => {
  await sequelize.sync({ force: true });
  console.log("START SERVER " + PORT);
});
