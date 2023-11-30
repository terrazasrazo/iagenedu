module.exports = (sequelize, type) => {
    return sequelize.define("resources", {
      resourceTitle: type.STRING,
      resourceType: type.STRING,
      resourceURL: type.STRING,
      resourceImage: type.STRING,
      keywords: type.STRING
    });
  };
  