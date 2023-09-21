module.exports = (sequelize, type) => {
  return sequelize.define("speakers", {
    name: type.STRING,
    bio: type.STRING,
    photo: type.STRING,
  });
};
