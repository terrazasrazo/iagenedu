const express = require("express"),
  db = require("../sequelize"),
  app = express();

module.exports = (app) => {
  app.route("/").get(function (req, res) {
    res.json({ hello: "world" });
  });

  app.route("/workshops").get(function (req, res) {
    db.workshops.findAll({
      include: [
        {
          model: db.speakers,
        },
      ],
    }).then((workshops) => res.json(workshops));
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
        order: [["level", "DESC"]]
      })
      .then((workshops) => res.json(workshops));
  });

  app.route("/workshops/:id").get(function (req, res) {
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
};
