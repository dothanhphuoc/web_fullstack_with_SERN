import express from "express";
import {
  getHomePage,
  getAboutPage,
  getCrud,
  postCrud,
  getDisplayUserCrud,
  getEditUserCrud,
  putUserCrud,
} from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
  app.get("/", getHomePage);

  app.get("/about", getAboutPage);

  app.get("/crud", getCrud);

  app.post("/post-crud", postCrud);

  app.get("/display-user-crud", getDisplayUserCrud);

  app.get("/edit-user-crud", getEditUserCrud);

  app.post("/put-user-crud", putUserCrud);

  return app.use("/", router);
};

module.exports = initWebRoutes;
