import db from "../models";
import crudServices from "../services/crudServices";
import { createNewUser, getDisplayUser } from "../services/crudServices";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homePage.ejs", { data: JSON.stringify(data) });
  } catch (e) {
    console.log(e);
  }
};

let getAboutPage = (req, res) => {
  return res.render("aboutPage.ejs");
};

let getCrud = (req, res) => {
  return res.render("crud.ejs");
};

let postCrud = async (req, res) => {
  let message = await createNewUser(req.body);
  console.log(message);
  return res.send("fghjkl");
};

let getDisplayUserCrud = async (req, res) => {
  let listUser = await getDisplayUser();
  return res.render("displayUsersCRUD.ejs", {listUser: listUser});
};

module.exports = {
  getHomePage,
  getAboutPage,
  getCrud,
  postCrud,
  getDisplayUserCrud,
};
