const express = require("express"),
  db = require("../sequelize"),
  app = express();

const { Sequelize } = require("../sequelize");

module.exports = (app) => {
  app.route("/lightnings/").get(function (req, res) {
    db.lightnings.findAll().then((lightnings) => res.json(lightnings));
  });

  app.route("/lightnings/").post(function (req, res) {
    db.lightnings
      .findAll({
        where: Sequelize.fn(
          "LOCATE",
          req.body.keyword,
          Sequelize.col("keywords")
        ),
      })
      .then((lightnings) => res.json(lightnings));
  });
};
