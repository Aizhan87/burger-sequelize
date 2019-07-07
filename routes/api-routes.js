// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  app.get("/", function (req, res) {
    db.Burger.findAll().then(function (data) {
      res.render("index", { burgers: data })
    })
  });



  // POST route for saving a new todo
  app.post("/api/burgers", function (req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: false
    }).then(function (dbBurger) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbBurger);
    });
  });


  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/burgers/:id", function (req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Burger.update({

      devoured: true
    }, {
        where: {
          id: req.params.id
        }
      }).then(function (dbBurger) {
        res.json(dbBurger);
      });
  });

};
