const express = require("express"),
  db = require("../sequelize"),
  app = express();

const { Sequelize } = require("../sequelize");

module.exports = (app) => {
  /* app.route("/keywords/").post(function (req, res) {
    db.mainsessions
      .findAll({
        where: Sequelize.fn(
          "LOCATE",
          req.body.keyword,
          Sequelize.col("keywords")
        ),
      })
      .then((mainsessions) => {
        db.resources
          .findAll({
            where: Sequelize.fn(
              "LOCATE",
              req.body.keyword,
              Sequelize.col("keywords")
            ),
          })
          .then((resources) => {
            db.workshops
              .findAll({
                where: Sequelize.fn(
                  "LOCATE",
                  req.body.keyword,
                  Sequelize.col("keywords")
                ),
              })
              .then((workshops) => {
                res.json({
                  mainsessions: mainsessions,
                  resources: resources,
                  workshops: workshops,
                });
              });
          });
      });
  });
  */
  app.route("/keywords/").post(function (req, res) {
    db.resources
      .findAll({
        where: Sequelize.fn(
          "LOCATE",
          req.body.keyword,
          Sequelize.col("keywords")
        ),
      })
      .then((resources) => {
        res.json({
          resources: resources,
        });
      });
  });
};
