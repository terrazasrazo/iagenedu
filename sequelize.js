const Sequelize = require("sequelize");
const config = require("./config/keys");
const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: "localhost",
  dialect: "mysql",
  timezone: "-05:00",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  dialectOptions: {
    socketPath: "/var/run/mysqld/mysqld.sock",
  },
});

const db = {};

db.Op = Sequelize.Op;
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.workshops = require("./models/workshops")(sequelize, Sequelize);
db.speakers = require("./models/speakers")(sequelize, Sequelize);

db.lightnings = require("./models/lightnings")(sequelize, Sequelize);

db.resources = require("./models/resources")(sequelize, Sequelize);

db.mainsessions = require("./models/mainsessions")(sequelize, Sequelize);
db.panelists = require("./models/panelists")(sequelize, Sequelize);

db.users = require("./models/users")(sequelize, Sequelize);
db.sigecos = require("./models/sigecos")(sequelize, Sequelize);

db.workshops.belongsToMany(db.speakers, { through: "workshopspeakers" });
db.speakers.belongsToMany(db.workshops, { through: "workshopspeakers" });

db.workshops.belongsToMany(db.users, { through: "workshopassistants" });
db.users.belongsToMany(db.workshops, { through: "workshopassistants" });

db.lightnings.belongsToMany(db.users, { through: "lightningsusers" });
db.users.belongsToMany(db.lightnings, { through: "lightningsusers" });

db.mainsessions.belongsToMany(db.panelists, { through: "panelistsessions" });
db.panelists.belongsToMany(db.mainsessions, { through: "panelistsessions" });

db.users.hasOne(db.sigecos);
db.sigecos.belongsTo(db.users);

sequelize
  .sync({
    force: false,
  })
  .then(() => {
    console.log("Database & tables created!");
  });

module.exports = db;
