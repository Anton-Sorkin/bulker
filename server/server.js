const express = require("express");
const app = express();
const dotenv = require("dotenv");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");

dotenv.config(
  {
    path: "../.env",
  },
  (error) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log("Environment variables loaded");
  }
);

app.use(express.json());

app.use(cors());

const getDataFromDatabase = async (client) => {
  const db = client.db("Bulker");
  const collection = db.collection("Food");

  try {
    const data = await collection.find({}).toArray();
    return data;
  } catch (error) {
    console.error(error);
  }
};

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api", async (req, res) => {
  const client = await MongoClient.connect(process.env.MONGODB_CONNECTION, {
    useNewUrlParser: true,
  });

  const data = await getDataFromDatabase(client);

  res.json(data);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
