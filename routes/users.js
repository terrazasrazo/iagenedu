const express = require("express"),
  db = require("../sequelize"),
  app = express(),
  crypto = require('crypto'),
  secret = "iagenedu";

module.exports = (app) => {
  app.route("/users").get(function (req, res) {
    db.users.findAll().then((users) => res.json(users));
  });

  app.route("/users/:id").get(function (req, res) {
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

  app.route("/users").post(function (req, res) {
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
            user.sendWelcomeEmail()
              .then((sendMail) => {
                if (sendMail.accepted) {
                  res.json({ messageId: sendMail.messageId });
                } else {
                  res.json({error: "Error to send email messages"})
                }
              });
            });
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
  });

  app.route("/users/validate/:hash").get(function (req, res) {
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

  app.route("/users/login").post(function (req, res) {
    db.users
      .findOne({
        where: {
          email: req.body.email,
          password: crypto.createHash("sha256", secret)
            .update(req.body.password)
            .digest("hex"),
          active: true,
        },
        attributes: {
          include: [
            'id', 'email', 'active', 'createdAt', 'updatedAt',
            [
              db.Sequelize.literal(`(
                    SELECT COUNT(*)
                    FROM workshopassistants
                    WHERE
                        workshopassistants.userId = id
                )`),
              "workshopsCount",
            ],
          ],
        },   
      })
      .then((user) => {
        if (user) {
          db.sigecos.findOne({
              where: {
                userId: user.id,
              }
            }
          ).then((sigeco) => {
            res.json({
              id: user.id,
              email: user.email,
              name: sigeco.name,
              lastname: sigeco.lastname,
              worshopsCount: user.get('workshopsCount'),
            });
          });
       } else {
          res.json({ error: "Usuario o contraseña incorrectos" });
        }
      });
  });
};
