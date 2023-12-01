const express = require("express"),
  db = require("../sequelize"),
  app = express();

const { Sequelize } = require("../sequelize");

module.exports = (app) => {
  app.route("/mainsessions/").get(function (req, res) {
    db.mainsessions.findAll().then((mainsessions) => res.json(mainsessions));
  });

  app.route("/mainsessions/").post(function (req, res) {
    db.mainsessions
      .findAll({
        where: Sequelize.fn(
          "LOCATE",
          req.body.keyword,
          Sequelize.col("keywords")
        ),
      })
      .then((mainsessions) => res.json(mainsessions));
  });

  app.route("/mainsessions/:id").get(function (req, res) {
    db.mainsessions
      .findAll({
        where: {
          id: req.params.id,
        },
        include: [
          {
            model: db.panelists,
          },
        ],
      })
      .then((mainsessions) => res.json(mainsessions));
  });
};
