module.exports = (sequelize, type) => {
  return sequelize.define("sigeco", {
    name: type.STRING,
    lastname: type.STRING,
    entity: type.STRING,
    account: type.STRING,
    curp: type.STRING,
    studyLevel: type.STRING
  });
};
