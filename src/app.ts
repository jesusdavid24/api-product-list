import express from "express";
import ConfigExpress from "./config/express";
import routes from "./routes";
import "dotenv/config";

if (process.env.NODE_ENV != "production") {
  require("dotenv");
}

const app = express();
const port = process.env.PORT || 3002;

ConfigExpress(app);
routes(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
