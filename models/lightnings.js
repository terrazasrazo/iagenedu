module.exports = (sequelize, type) => {
    return sequelize.define("lightnings", {
      title: type.STRING,
      thematicLine: type.STRING,
      educationalLevel: type.STRING,
      knwoledgeArea: type.STRING,
      videoUrl: type.STRING,
      userId: type.INTEGER,
      keywords: type.STRING
    });
  };
  