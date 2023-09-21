const express = require("express"),
  db = require("../sequelize"),
  app = express();

module.exports = (app) => {
  app.route("/users").get(function (req, res) {
    db.users.findAll().then((users) => res.json(users));
  });

  app.route("/users/:id").get(function (req, res) {
    db.users.findAll({
      where: {
        id: req.params.id
      },
      include: [{
        model: db.sigecos
      }]
    }).then((user) => res.json(user));
  });

  app.route("/users").post(function (req, res) {
    db.users.create(req.body).then((user) => {
      db.sigecos
        .create({
          userId: user.id,
          name: req.body.name,
          lastname: req.body.lastname,
          entity: req.body.entity,
          account: req.body.account,
          curp: req.body.curp,
          studyLevel: req.body.studyLevel,
        })
        .then((sigeco) => res.json(user));
    });
  });

  app.route("/users/:id").put(function (req, res) {
    db.users
      .update(req.body, {
        where: {
          id: req.params.id,
        },
      })
      .then((user) => res.json(user));
  });

  app.route("/sigeco/:id").put(function (req, res) {
    db.sigecos
      .update(req.body, {
        where: {
          userId: req.params.id,
        },
      })
      .then((sigeco) => res.json(sigeco));
  })
};
