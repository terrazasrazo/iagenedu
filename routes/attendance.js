const express = require("express"),
  db = require("../sequelize");

module.exports = (app) => {
  app.route("/attendance").post(function (req, res) {
    db.attendance
      .create({
        userId: req.body.userid,
      })
      .then((attendance) => {
        res.json({ message: "Se ha registrado la asistencia" });
      })
      .catch((error) => {
        res.status(500).json({ message: error });
      });
  });

  app.route("/attendance").get(function (req, res) {
    db.attendance
      .findAll()
      .then((attendance) => {
        res.json(attendance);
      })
      .catch((error) => {
        res.status(500).json({ message: error });
      });
  });

  app.route("/attendance/:id").get(function (req, res) {
    db.attendance
      .findAll({
        where: {
          userId: req.params.id,
        },
      })
      .then((attendance) => {
        res.json(attendance);
      })
      .catch((error) => {
        res.status(500).json({ message: error });
      });
  });
};
