module.exports = (sequelize, type) => {
  return sequelize.define("keywords", {
    keyword: type.STRING
  });
};
