const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
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
      from: '"IAGen en Educación UNAM" <iagenedu@cuaieed.unam.mx>',
      to: this.email,
      subject: "✅ Comencemos validando tu cuenta",
      text: `Te damos la bienvenida al sitio web de la 2a. JORNADA DE IA GENERATIVA EN EDUCACIÓN, UNAM 2024. Para comenzar a utilizar tu cuenta, por favor valida tu correo electrónico a través del siguiente enlace: ${process.env.URL_DESTINY}/user/activate/${this.hash}`,
      html: `<div style="font-size: 24px"><p>Te damos la bienvenida al sitio web de la <strong>2a. Jornada de IA Generativa en Educación, UNAM 2024</strong>.</p><p>Para comenzar a utilizar tu cuenta, por favor valida tu correo electrónico a través del siguiente <a href="${process.env.URL_DESTINY}/user/activate/${this.hash}">enlace</a>.</p></div>`,
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
