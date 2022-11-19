const models = require('../models');

// database 연동;


module.exports = () => {
    const options = {
        force: process.env.NODE_ENV === 'test' ? true : false
    }
    return models.sequelize.sync(options);
}