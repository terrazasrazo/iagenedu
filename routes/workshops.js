const express = require("express"),
  db = require("../sequelize"),
  app = express();

const { QueryTypes, where } = require("sequelize");

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

  app.route("/workshops2023").get(function (req, res) {
    db.workshops
      .findAll({
        where: {
          createdAt: {
            [db.Sequelize.Op.lt]: new Date('2024-01-01T00:00:00')
          },
        },
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

  app.route("/workshopassistants").get(function (req, res) {
    db.workshops
      .findAll({
        where: {
          createdAt: {
            [db.Sequelize.Op.gt]: new Date('2024-09-24T00:00:00')
          },
        },
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
        // Verificar si el usuario ya está inscrito en otro workshop con el mismo ocurrenceDay
        user
          .getWorkshops({
            where: {
              ocurrenceDay: workshop.ocurrenceDay, // Comparar el día de ocurrencia
            },
          })
          .then((existingWorkshops) => {
            if (existingWorkshops.length > 0) {
              // El usuario ya está inscrito en otro workshop el mismo día
              res.json({
                error:
                  "Ya estás inscrito en un taller que ocurre el mismo día.",
              });
            } else {
              // Proceder con la inscripción si no está inscrito en otro workshop el mismo día
              workshop.addUser(user).then((workshopassistant) => {
                if (workshopassistant === undefined) {
                  res.json({
                    error: "Ya te encuentras registrado en este taller",
                  });
                } else {
                  res.json(workshopassistant);
                }
              });
            }
          });
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
