const express = require("express"),
  db = require("../sequelize"),
  app = express();

const { QueryTypes } = require("sequelize");

module.exports = (app) => {
  app.route("/").get(function (req, res) {
    res.json({ hello: "world" });
  });

  app.route("/workshops").get(function (req, res) {
    db.workshops
      .findAll({
        include: [
          {
            model: db.speakers,
          },
        ],
      })
      .then((workshops) => res.json(workshops));
  });

  app.route("/workshopassistants").get(function (req, res) {
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
        order: [
          ["ocurrenceDay", "ASC"],
          ["level", "ASC"],
        ],
      })
      .then((workshops) => res.json(workshops));
  });

  app.route("/workshopassistants").post(function (req, res) {
    db.workshops.findByPk(req.body.workshopId).then((workshop) => {
      db.users.findByPk(req.body.userId).then((user) => {
        workshop
          .addUser(user)
          .then((workshopassistant) => res.json(workshopassistant));
      });
    });
  });

  app.route("/workshops/:id").get(function (req, res) {
    db.workshops
      .findAll({
        where: {
          id: req.params.id,
        },
        include: [
          {
            model: db.speakers,
          },
        ],
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
      })
      .then((workshop) => res.json(workshop));
  });

  app.route("/workshops").post(function (req, res) {
    db.workshops.create(req.body).then((workshop) => res.json(workshop));
  });

  app.route("/workshops/:id").put(function (req, res) {
    db.workshops
      .update(req.body, { where: { id: req.params.id } })
      .then((workshop) => res.json(workshop));
  });

  app.route("/workshops/:id").delete(function (req, res) {
    db.workshops
      .destroy({ where: { id: req.params.id } })
      .then((workshop) => res.json(workshop));
  });

  app.route("/workshops/validate/:workshopId/:userId").get(function (req, res) {
    db.workshops
      .findAll({
        where: {
          id: req.params.workshopId,
        },
        attributes: {
          include: [
            [
              db.Sequelize.literal(`(
                  SELECT COUNT(*)
                  FROM workshopassistants
                  WHERE
                    workshopassistants.workshopId = workshops.id
                  AND
                    workshopassistants.userId = ${req.params.userId}
              )`),
              "registered",
            ],
          ],
        },
      })
      .then((workshop) =>
        res.json({ registered: workshop[0].dataValues.registered })
      );
  });
};
