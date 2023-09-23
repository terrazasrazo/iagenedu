const express = require("express"),
  db = require("../sequelize"),
  app = express(),
  crypto = require('crypto'),
  secret = "iagenedu";

module.exports = (app) => {
  app.route("/iagen-api/users").get(function (req, res) {
    db.users.findAll().then((users) => res.json(users));
  });

  app.route("/iagen-api/users/:id").get(function (req, res) {
    db.users
      .findAll({
        where: {
          id: req.params.id,
        },
        include: [
          {
            model: db.sigecos,
          },
        ],
      })
      .then((user) => res.json(user));
  });

  app.route("/iagen-api/users").post(function (req, res) {
    const hash = crypto.createHash("sha256", secret)
      .update(req.body.email+req.body.password)
      .digest("hex");
    const password = crypto.createHash("sha256", secret)
      .update(req.body.password)
      .digest("hex");
    db.users
      .create({
        email: req.body.email,
        password: password,
        hash: hash,
      })
      .then((user) => {
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
          .then((sigeco) => {
            user.sendWelcomeEmail().then(() => {
              res.json(user);
            });
          });
      });
  });

  app.route("/iagen-api/users/:id").put(function (req, res) {
    db.users
      .update(req.body, {
        where: {
          id: req.params.id,
        },
      })
      .then((user) => res.json(user));
  });

  app.route("/iagen-api/sigeco/:id").put(function (req, res) {
    db.sigecos
      .update(req.body, {
        where: {
          userId: req.params.id,
        },
      })
      .then((sigeco) => res.json(sigeco));
  });

  app.route("/iagen-api/users/validate/:hash").get(function (req, res) {
    db.users
      .update(
        { active: true },
        {
          where: {
            hash: req.params.hash,
          },
        }
      )
      .then((user) => {
        if (user) {
          res.redirect("http://iagenedu.unam.mx/");
        } else {
          res.redirect("https://bunam.unam.mx/");
        }
      });
  });

  app.route("/iagen-api/users/login").post(function (req, res) {
    db.users
      .findOne({
        where: {
          email: req.body.email,
          password: crypto.createHash("sha256", secret)
            .update(req.body.password)
            .digest("hex"),
          active: true,
        },
      })
      .then((user) => {
        if (user) {
          res.json(user);
        } else {
          res.json({ error: "Usuario o contraseña incorrectos" });
        }
      });
  });
};
