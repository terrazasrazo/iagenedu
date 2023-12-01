module.exports = (sequelize, type) => {
    return sequelize.define("mainsessions", {
      sessionTitle: type.STRING,
      sessionUrl: type.STRING,
      ocurrenceDay: type.STRING,
      sessionImage: type.STRING,
      sessionResume: type.TEXT,
      keywords: type.STRING
    });
  };
  