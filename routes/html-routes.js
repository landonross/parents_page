const path = require("path");
const { Op } = require("sequelize");

module.exports = function(app) {
    app.get("/", (req, res) => {
        // If the user already has an account send them to the members page
    
        res.render("index");
      });

      app.get("/contact", (req, res) => {
        res.render("contact");
      });
      
      app.get("/about", (req, res) => {
        res.render("about");
      });
    }