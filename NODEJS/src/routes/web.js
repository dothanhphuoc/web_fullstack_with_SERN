import express from "express";
import { getHomePage, getAboutPage, getCrud, postCrud } from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
  app.get("/", getHomePage);

  app.get("/about", getAboutPage);

  app.get("/crud", getCrud);

  app.post("/post-crud", postCrud);

  return app.use("/", router);
};

module.exports = initWebRoutes;
