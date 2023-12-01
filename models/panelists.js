module.exports = (sequelize, type) => {
  return sequelize.define("panelists", {
    name: type.STRING,
    dependence: type.STRING,
    photo: type.STRING,
    googleScholar: type.STRING,
    researchGate: type.STRING,
    profile: type.STRING,
    twitter: type.STRING,
  });
};
