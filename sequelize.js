const Sequelize = require('sequelize');
const config = require('./config/keys');
const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-05:00',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    dialectOptions: {
        socketPath: "/var/run/mysqld/mysqld.sock"
    }
});

const db = {};

db.Op = Sequelize.Op
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.workshops = require('./models/workshops')(sequelize, Sequelize);
// db.keywords = require('./models/keywords')(sequelize, Sequelize);
db.speakers = require('./models/speakers')(sequelize, Sequelize);
db.users = require('./models/users')(sequelize, Sequelize);
db.sigecos = require('./models/sigecos')(sequelize, Sequelize);
db.workshopassistants = require('./models/workshopassistants')(sequelize, Sequelize);
/*
db.workshops.belongsToMany(db.keywords, { through: 'workshopkeywords' });
db.keywords.belongsToMany(db.workshops, { through: 'workshopkeywords' });
*/
db.workshops.hasOne(db.speakers);
db.speakers.belongsTo(db.workshops);

db.users.hasOne(db.sigecos);
db.sigecos.belongsTo(db.users);

db.workshops.belongsToMany(db.users, { through: 'workshopassistants' });
db.users.belongsToMany(db.workshops, { through: 'workshopassistants' });

sequelize.sync({
        force: false
    })
    .then(() => {
        console.log('Database & tables created!')
    });

module.exports = db;
