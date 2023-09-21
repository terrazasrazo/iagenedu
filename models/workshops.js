module.exports = (sequelize, type) => {
  return sequelize.define("workshops", {
    title: type.STRING,
    tools: type.STRING,
    level: type.STRING,
    educationLevel: type.STRING,
    knodledgeArea: type.STRING,
    purpouse: type.STRING,
    themes: type.STRING,
    product: type.STRING,
    references: type.STRING,
    participants: type.INTEGER,
    zoomSession: type.STRING
  });
};
