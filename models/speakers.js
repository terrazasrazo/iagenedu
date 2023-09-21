module.exports = (sequelize, type) => {
  return sequelize.define("speakers", {
    name: type.STRING,
    email: type.STRING,
    bio: type.TEXT,
    photo: type.STRING,
  });
};
