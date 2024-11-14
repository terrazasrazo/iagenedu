const express = require("express"),
  db = require("../sequelize"),
  app = express();

const { Sequelize } = require("../sequelize");

module.exports = (app) => {
  app.route("/lightnings/").get(function (req, res) {
    db.lightnings.findAll().then((lightnings) => res.json(lightnings));
  });

  app.route("/lightning/:id").get(function (req, res) {
    db.lightnings
      .findAll({
        where: {
          userId: req.params.id,
        },
      })
      .then((lightning) => res.json(lightning));
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

  app.route("/lightning/").post(function (req, res) {
    db.lightnings
      .create({
        title: req.body.title,
        thematicLine: req.body.category,
        videoUrl: req.body.video,
        knwoledgeArea: "",
        keywords: req.body.keywords,
        userId: req.body.user,
      })
      .then((lightning) => res.json(lightning));
  });
};
