module.exports = (app) => {
    // Connect MongoDB ----------------------------------------------------------------------------
    app.db = require('mongoose');
    app.db.connect(app.mongodb, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });
    app.db.connection.on('error', console.error.bind(console, 'The MongoDB connection error'));
    app.db.connection.once('open', callback => console.log(' - The MongoDB connection succeeded.'));

    // Define all models --------------------------------------------------------------------------
    app.model = {};

    app.modelAreadyDeclared = modelName => {
        try {
            app.db.model(modelName)
            return true;
        } catch (e) {
            return false;
        }
    }
};
