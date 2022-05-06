const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://{process.env.DB_USER}:{process.env.DB_PASSWORD}@cluster0.jnddk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  console.log("DB is connected.");
  // perform actions on the collection object
  client.close();
});

app.get("/", (req, res) => {
  res.send("Express is running");
});

app.listen(port, () => {
  console.log("Server is running...");
});
