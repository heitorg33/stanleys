const express = require("express");
const cors = require("cors");
const { router } = require("./router/routes");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(router);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Permite todas as origens
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
