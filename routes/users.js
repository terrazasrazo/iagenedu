const express = require("express"),
  db = require("../sequelize"),
  app = express(),
  crypto = require("crypto"),
  secret = "iagenedu",
  nodemailer = require("nodemailer"),
  mailConfig = require("../config/mailer"),
  urlDestiny = "https://iagenedu.unam.mx";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: mailConfig.user,
    pass: mailConfig.password,
  },
});

const sendRecoveryEmail = async (email, hash) => {
  const mailOptions = {
    from: '"Grupo de trabajo sobre Inteligencia Artificial Generativa de la UNAM" <iagenedu@cuaieed.unam.mx>',
    to: email,
    subject: "🔐 Has solicitado la recuperación de tu contraseña",
    text: `Hemos recibido una solicitud para recuperar tu contraseña, si no has sido tú puedes hacer caso omiso de este correo. No te preocupes que este proceso solo se realiza a través de tu cuenta de correo registrada en nuestra plataforma. Para recuperar tu contraseña, por favor accede al siguiente enlace: ${urlDestiny}/recovery/${hash}`,
    html: `<div style="font-size: 24px"><p>Hemos recibido una solicitud para recuperar tu contraseña, si no has sido tú puedes hacer caso omiso de este correo. No te preocupes que este proceso solo se realiza a través de tu cuenta de correo registrada en nuestra plataforma.</p><p>Para recuperar tu contraseña, por favor accede al siguiente <a href="${urlDestiny}/recovery/${hash}">enlace</a>.</p></div>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    return info;
  } catch (error) {
    console.log("Error to send email messages", error);
    return error;
  }
};

const sendConfirmationChangePassword = async (email) => {
  const mailOptions = {
    from: '"Grupo de trabajo sobre Inteligencia Artificial Generativa de la UNAM" <iagenedu@cuaieed.unam.mx>',
    to: email,
    subject: "🔑 Has realizado un cambio de tu contraseña",
    text: `Hemos procesado tu cambio de contraseña. Ahora puedes ingresar a la plataforma con tu nueva contraseña.`,
    html: `<div style="font-size: 24px"><p>Hemos procesado tu cambio de contraseña.</p><p>Ahora puedes ingresar a la plataforma con tu nueva contraseña.</p><p>Da clic en el siguiente <a href="${urlDestiny}" target="_blank">enlace</a> para ir a la plataforma.</p></div>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    return info;
  } catch (error) {
    console.log("Error to send email messages", error);
    return error;
  }
};

module.exports = (app) => {
  app.route("/users").post(function (req, res) {
    const hash = crypto
      .createHash("sha256", secret)
      .update(req.body.email + req.body.password)
      .digest("hex");
    const password = crypto
      .createHash("sha256", secret)
      .update(req.body.password)
      .digest("hex");
    db.users
      .findAll({
        where: {
          email: req.body.email,
        },
      })
      .then((user) => {
        if (user.length > 0) {
          res.json({
            error: "El correo electrónico ya se encuentra registrado",
          });
        } else {
          db.sigecos
            .findAll({
              where: {
                curp: req.body.curp,
              },
            })
            .then((sigeco) => {
              if (sigeco.length > 0) {
                res.json({ error: "El CURP ya se encuentra registrado" });
              } else {
                db.users
                  .create({
                    email: req.body.email,
                    password: password,
                    active: false,
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
                        user.sendWelcomeEmail().then((sendMail) => {
                          if (sendMail.accepted) {
                            res.json({ messageId: sendMail.messageId });
                          } else {
                            res.json({ error: "Error to send email messages" });
                          }
                        });
                      });
                  });
              }
            });
        }
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

  app.route("/users/activate/:hash").get(function (req, res) {
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
        if (user[0] === 0) {
          res.json({ user: false });
        } else {
          res.json({ user: true });
        }
      });
  });

  app.route("/users/login").post(function (req, res) {
    db.users
      .findOne({
        where: {
          email: req.body.email,
          password: crypto
            .createHash("sha256", secret)
            .update(req.body.password)
            .digest("hex"),
          active: true,
        },
        attributes: {
          include: [
            "id",
            "email",
            "active",
            "createdAt",
            "updatedAt",
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
          db.sigecos
            .findOne({
              where: {
                userId: user.id,
              },
            })
            .then((sigeco) => {
              res.json({
                id: user.id,
                email: user.email,
                name: sigeco.name,
                lastname: sigeco.lastname,
                worshopsCount: user.get("workshopsCount"),
              });
            });
        } else {
          res.json({ error: "Usuario o contraseña incorrectos" });
        }
      });
  });

  app.route("/users/recoverypassword").post(function (req, res) {
    const hash = crypto.randomBytes(32).toString ('hex');
    db.users
      .update(
        { hash: hash },
        {
          where: {
            email: req.body.email,
          },
        }
      )
      .then((user) => {
        if (user[0] === 0) {
          res.json({ user: false });
        } else {
          sendRecoveryEmail(req.body.email, hash).then((sendMail) => {
            res.json({ user: sendMail.messageId });
          });
        }
      });
  });

  app.route("/users/validatehash").post(function (req, res) {
    db.users
      .findOne({
        where: {
          hash: req.body.hash,
        },
      })
      .then((user) => {
        if (user) {
          res.json({ date: user.updatedAt });
        } else {
          res.json({ date: false });
        }
      });
  });

  app.route("/users/changepassword").post(function (req, res) {
    const newHash = crypto.randomBytes(32).toString ('hex');
    const newPassword = crypto
    .createHash("sha256", secret)
    .update(req.body.password)
    .digest("hex");

    db.users
      .update(
        {
          password: newPassword,
          hash: newHash,
        },
        {
          where: {
            hash: req.body.hash,
            updatedAt: req.body.updatedAt,
          },
        }
      )
      .then((user) => {
        if(user[0] === 0){
          res.json({newPassword: false})
        } else {
          db.users.findOne({
            hash: newHash
          }).then(user => {
            sendConfirmationChangePassword(user.email).then(sendMail => {
              res.json({newPassword: true})
            })
          })
        }
      });
  });

  app.route("/users/agenda/:userId").get(function (req, res) {
    db.users
      .findAll({
        where: {
          id: req.params.userId,
        },
        attributes: {
          exclude: [
            "id",
            "email",
            "password",
            "hash",
            "active",
            "createdAt",
            "updatedAt",
          ],
        },
        include: [
          {
            model: db.workshops,
            attributes: [
              "id",
              "title",
              "level",
              "purpouse",
              "zoomSession",
              "ocurrenceDay",
            ],
          },
        ],
      })
      .then((user) => res.json(user[0].workshops));
  });
};
