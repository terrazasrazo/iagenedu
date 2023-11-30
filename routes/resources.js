const express = require("express"),
  db = require("../sequelize"),
  app = express();

const { Sequelize } = require("../sequelize");

module.exports = (app) => {
  app.route("/resources/").get(function (req, res) {
    db.resources.findAll().then((resources) => res.json(resources));
  });

  app.route("/resources/").post(function (req, res) {
    db.resources
      .findAll({
        where: Sequelize.fn(
          "LOCATE",
          req.body.keyword,
          Sequelize.col("keywords")
        ),
      })
      .then((resources) => res.json(resources));
  });
};
