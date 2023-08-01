import express from "express";
import { getHomePage, getAboutPage } from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
  app.get("/", getHomePage);

  app.get("/about", getAboutPage);

  return app.use("/", router);
};

module.exports = initWebRoutes;
