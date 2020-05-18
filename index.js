//index.js

/**
 *  Required External Modules
 */
const express = require('express');
const path = require('path');
 /**
  * App variables
  */
const app = express();
const port = process.env.PORT || "8000";
  /**
   * App configuration
   */
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "pug");
  app.use(express.static(path.join(__dirname, "public")));
/**
 * Routes Defination
 */
 app.get("/",(req, res) =>{
     res.render("index", { title: "Home"});
 })
 app.get("/user", (req, res) =>{
     res.render("user", { title: "Profile",userProfile:{nickname: "Auth0"}});
 })
 /**
  * Server Activation
  */
 app.listen(port, ()=> {
     console.log(`listening to request on http://localhost:${port}`);
 })


