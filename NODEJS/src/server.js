import express from "express";
import dotenv from "dotenv/config"; //used to read .env file
import bodyParser from "body-parser";

import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";

const app = express();

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);

initWebRoutes(app);

//if port === undefined {port === 4343}
const port = process.env.PORT || 4343;
app.listen(port, (req, res) => {
  console.log(`website run port ${port}`);
});
