import { query } from "express";
import db from "../models";
import crudServices from "../services/crudServices";
import {
  createNewUser,
  getDisplayUser,
  getUserInfoById,
  updateUserData,
  deleteUserById,
} from "../services/crudServices";

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
  return res.render("displayUsersCRUD.ejs", { listUser: listUser });
};

let getEditUserCrud = async (req, res) => {
  let userId = req.query.id;

  if (userId) {
    let userData = await getUserInfoById(userId);

    //check user data not found
    if (userData) {
    }

    return res.render("editUserCRUD.ejs", { userData: userData });
  } else {
    return res.send("User Not Found");
  }
};

let putUserCrud = async (req, res) => {
  let dataUser = req.body;
  let allUser = await updateUserData(dataUser);

  return res.render("displayUsersCRUD.ejs", {
    listUser: allUser,
  });
};

let deleteUserCrud = async (req, res) => {
  let id = req.query.id;
  if (id) {
    await deleteUserById(id);
    return res.send("Delete Success!");
  } else {
    return res.send("User Not Found");
  }
};

module.exports = {
  getHomePage,
  getAboutPage,
  getCrud,
  postCrud,
  getDisplayUserCrud,
  getEditUserCrud,
  putUserCrud,
  deleteUserCrud,
};
