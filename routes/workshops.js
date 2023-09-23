const express = require("express"),
  db = require("../sequelize"),
  app = express();

  const { QueryTypes } = require('sequelize');

module.exports = (app) => {
  app.route("/").get(function (req, res) {
    res.json({ hello: "world" });
  });

  app.route("/iagen-api/workshops").get(function (req, res) {
    db.workshops.findAll({
      include: [
        {
          model: db.speakers,
        },
      ],
    }).then((workshops) => res.json(workshops));
  });

  app.route("/iagen-api/workshopassistants").get(function (req, res) {
    db.workshops
      .findAll({
        attributes: {
          include: [
            [
              db.Sequelize.literal(`(
                    SELECT COUNT(*)
                    FROM workshopassistants
                    WHERE
                        workshopassistants.workshopId = workshops.id
                )`),
              "assistantsCount",
            ],
          ],
        },
        order: [["ocurrenceDay", "ASC"],["level", "ASC"]]
      })
      .then((workshops) => res.json(workshops));
  });

  app.route("/iagen-api/workshops/:id").get(function (req, res) {
    db.workshops.findAll({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: db.speakers,
        },
      ],
    }).then((workshop) => res.json(workshop))
  });

  app.route("/iagen-api/workshops").post(function (req, res) {
    db.workshops.create(req.body).then((workshop) => res.json(workshop));
  });

  app.route("/iagen-api/workshops/:id").put(function (req, res) {
    db.workshops
      .update(req.body, { where: { id: req.params.id } })
      .then((workshop) => res.json(workshop));
  });

  app.route("/iagen-api/workshops/:id").delete(function (req, res) {
    db.workshops
      .destroy({ where: { id: req.params.id } })
      .then((workshop) => res.json(workshop));
  });

  app.route("/iagen-api/workshopassistants/:id").get(function (req, res) {
    db.query(`SELECT COUNT(*) FROM workshopassistants WHERE workshopassistants.workshopId = ${req.params.id}`, { type: QueryTypes.SELECT }).then((workshopassistants) => res.json(workshopassistants));
  });

};
