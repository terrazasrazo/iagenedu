const nodemailer = require("nodemailer"),
  mailConfig = require("../config/mailer"),
  urlDestiny = "https://iagenedu.unam.mx";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: mailConfig.user,
    pass: mailConfig.password,
  },
});

module.exports = (sequelize, type) => {
  const Users = sequelize.define("users", {
    email: type.STRING,
    password: type.STRING,
    active: {
      type: type.BOOLEAN,
      defaultValue: false,
    },
    hash: type.STRING,
  });

  Users.prototype.sendWelcomeEmail = async function () {
    const mailOptions = {
      from: '"Grupo de trabajo sobre Inteligencia Artificial Generativa de la UNAM" <iagenedu@cuaieed.unam.mx>',
      to: this.email,
      subject: "✅ Comencemos validando tu cuenta",
      text: `Te damos la bienvenida al sitio web de la I JORNADA DE IA GENERATIVA EN EDUCACIÓN, UNAM 2023. Para comenzar a utilizar tu cuenta, por favor valida tu correo electrónico a través del siguiente enlace: ${urlDestiny}/activate/${this.hash}`,
      html: `<div style="font-size: 24px"><p>Te damos la bienvenida al sitio web de la <strong>I Jornada de IA Generativa en Educación, UNAM 2023</strong>.</p><p>Para comenzar a utilizar tu cuenta, por favor valida tu correo electrónico a través del siguiente <a href="${urlDestiny}/activate/${this.hash}">enlace</a>.</p></div>`,
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

  return Users;
};
