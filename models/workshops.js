module.exports = (sequelize, type) => {
  return sequelize.define("workshops", {
    title: type.STRING,
    tools: type.TEXT,
    level: type.INTEGER,
    educationLevel: type.STRING,
    knodledgeArea: type.STRING,
    purpouse: type.TEXT,
    themes: type.TEXT,
    product: type.TEXT,
    references: type.TEXT,
    keywords: type.STRING,
    participants: type.INTEGER,
    zoomSession: type.STRING
  });
};
