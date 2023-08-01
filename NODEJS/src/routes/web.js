import express from "express";

let router = express.Router();

let initWebRoutes = (app) => {
  app.get("/", (req, res) => {
    return res.send("Home Page Route with Phuoc");
  });

  return app.use("/", router);
};

module.exports = initWebRoutes;
